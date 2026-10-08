exports.handler = async function (event) {
try {
if (event.httpMethod !== "POST") {
return {
statusCode: 405,
body: JSON.stringify({ error: "Metodo non consentito" })
};
}

```
const { orderID } = JSON.parse(event.body || "{}");

if (!orderID) {
  return {
    statusCode: 400,
    body: JSON.stringify({ error: "Order ID mancante" })
  };
}

const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  return {
    statusCode: 500,
    body: JSON.stringify({
      error: "Credenziali PayPal non configurate"
    })
  };
}

const auth = Buffer.from(
  `${clientId}:${clientSecret}`
).toString("base64");

const tokenResponse = await fetch(
  "https://api-m.sandbox.paypal.com/v1/oauth2/token",
  {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  }
);

const tokenData = await tokenResponse.json();

if (!tokenResponse.ok || !tokenData.access_token) {
  return {
    statusCode: 500,
    body: JSON.stringify({
      error: "Impossibile ottenere il token PayPal"
    })
  };
}

const captureResponse = await fetch(
  `https://api-m.sandbox.paypal.com/v2/checkout/orders/${encodeURIComponent(orderID)}/capture`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
      "Content-Type": "application/json"
    }
  }
);

const captureData = await captureResponse.json();

console.log(
  "PayPal capture response:",
  JSON.stringify(captureData)
);

if (!captureResponse.ok) {
  return {
    statusCode: captureResponse.status,
    body: JSON.stringify({
      error: "Errore durante il pagamento",
      details:
        captureData.name ||
        captureData.message ||
        "Errore sconosciuto"
    })
  };
}

return {
  statusCode: 200,
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(captureData)
};
```

} catch (error) {
console.error("Capture order error:", error);

```
return {
  statusCode: 500,
  body: JSON.stringify({
    error: "Errore interno del server"
  })
};
```

}
};

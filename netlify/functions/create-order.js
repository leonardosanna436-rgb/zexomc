exports.handler = async function (event) {
try {
if (event.httpMethod !== "POST") {
return {
statusCode: 405,
body: JSON.stringify({ error: "Metodo non consentito" })
};
}

```
const { total, items } = JSON.parse(event.body || "{}");
const amount = Number(total);

if (!Number.isFinite(amount) || amount <= 0) {
  return {
    statusCode: 400,
    body: JSON.stringify({ error: "Importo non valido" })
  };
}

if (!Array.isArray(items) || items.length === 0) {
  return {
    statusCode: 400,
    body: JSON.stringify({ error: "Carrello vuoto" })
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

const orderResponse = await fetch(
  "https://api-m.sandbox.paypal.com/v2/checkout/orders",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "EUR",
            value: amount.toFixed(2)
          }
        }
      ],
      application_context: {
        brand_name: "ZexoMC",
        user_action: "PAY_NOW",
        return_url: "https://zexomc.it/checkout-success.html",
        cancel_url: "https://zexomc.it/store.html"
      }
    })
  }
);

const order = await orderResponse.json();

console.log("PayPal response:", JSON.stringify(order));

if (!orderResponse.ok || !order.id) {
  return {
    statusCode: 500,
    body: JSON.stringify({
      error: "Errore PayPal",
      details: order.name || order.message || "Errore sconosciuto"
    })
  };
}

return {
  statusCode: 200,
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(order)
};
```

} catch (error) {
console.error("Create order error:", error);

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

const PRODUCTS = [
{
id: "erede",
name: "Erede",
price: 7.99,
color: "#22c55e",
description: "Il primo grado VIP per distinguerti nella SMP.",
benefits: ["Prefix Erede", "Kit Erede", "Vantaggi esclusivi"]
},
{
id: "nemesi",
name: "Nemesi",
price: 14.99,
color: "#3b82f6",
description: "Più vantaggi e più possibilità nella SMP.",
benefits: ["Prefix Nemesi", "Kit Nemesi", "Vantaggi extra"]
},
{
id: "ombra",
name: "Ombra",
price: 27.99,
color: "#f59e0b",
description: "Un grado premium pensato per chi vuole di più.",
benefits: ["Prefix Ombra", "Kit Ombra", "Vantaggi premium"]
},
{
id: "drago",
name: "Drago",
price: 39.99,
color: "#ef4444",
description: "Un grado potente per distinguerti nella community.",
benefits: ["Prefix Drago", "Kit Drago", "Vantaggi avanzati"]
},
{
id: "celestiale",
name: "Celestiale",
price: 54.99,
color: "#67e8f9",
description: "Un grado di fascia alta con vantaggi esclusivi.",
benefits: ["Prefix Celestiale", "Kit Celestiale", "Vantaggi esclusivi"]
},
{
id: "eterno",
name: "Eterno",
price: 74.99,
color: "#a855f7",
description: "Il grado VIP più prestigioso dello Store SMP.",
benefits: ["Prefix Eterno", "Kit Eterno", "Vantaggi massimi"]
}
];

const QUESTIONS = {
"Trial Staff": [
"Qual è il tuo nickname Minecraft?",
"Qual è il tuo username Discord?",
"Quanti anni hai?",
"Da quanto tempo giochi a Minecraft?",
"Da quanto tempo conosci ZexoMC?",
"Quanto tempo puoi dedicare al server ogni giorno/settimana?",
"Perché vuoi diventare Staff di ZexoMC?",
"Perché pensi di essere adatto/a a questo ruolo?",
"Quali sono, secondo te, le caratteristiche più importanti di uno Staff?",
"Cosa vorresti migliorare o aggiungere allo Staff di ZexoMC?",
"Un giocatore insulta ripetutamente un altro giocatore. Come intervieni?",
"Un tuo amico infrange il regolamento. Come ti comporti?",
"Un giocatore ti accusa di abuso di potere. Come reagisci?",
"Vedi un altro Staffer che abusa dei propri permessi. Cosa fai?",
"Due giocatori stanno litigando in chat. Come gestisci la situazione?",
"Un giocatore continua a violare il regolamento dopo un primo richiamo. Cosa fai?",
"Un giocatore ti chiede di bannare qualcuno senza prove. Come rispondi?",
"Conosci i principali comandi di moderazione di Minecraft?",
"Hai già avuto esperienza come Staff in altri server? Se sì, quali?",
"Conosci plugin come LuckPerms, EssentialsX o sistemi di moderazione?",
"Sai riconoscere spam, flood, pubblicità, insulti e tentativi di truffa?",
"Sai distinguere un semplice sospetto da una violazione verificata?",
"Sei disposto/a a rispettare il regolamento anche quando riguarda tuoi amici?",
"Come reagisci alle critiche?",
"Cosa faresti se commettessi un errore da Staff?",
"Sei disposto/a a collaborare con gli altri membri dello Staff?",
"Perché dovremmo scegliere te invece di un altro candidato?",
"Hai qualcosa da aggiungere alla tua candidatura?",
"Hai suggerimenti per migliorare ZexoMC?",
"Confermi di aver letto e accettato il regolamento dello Staff?"
],

"Developer": [
"Qual è il tuo nickname Minecraft?",
"Qual è il tuo username Discord?",
"Quanti anni hai?",
"Da quanto tempo programmi?",
"Quanto tempo puoi dedicare a ZexoMC ogni settimana?",
"Hai già lavorato in altri server Minecraft? Se sì, quali?",
"Quali linguaggi di programmazione conosci?",
"Qual è il linguaggio che conosci meglio?",
"Qual è il tuo livello di esperienza con Java?",
"Hai mai sviluppato plugin per Minecraft?",
"Conosci Paper/Spigot API?",
"Hai esperienza con Velocity o altri proxy?",
"Hai mai utilizzato database come MySQL/MariaDB?",
"Conosci Git/GitHub?",
"Hai esperienza con API esterne?",
"Sai lavorare con configurazioni YAML/JSON?",
"Hai mai utilizzato Maven o Gradle?",
"Come struttureresti un plugin Minecraft?",
"Come gestiresti i comandi e i relativi permessi?",
"Come faresti comunicare un plugin con LuckPerms?",
"Come gestiresti un sistema di GUI/menu?",
"Come salveresti i dati dei giocatori?",
"Come eviteresti di causare lag durante operazioni pesanti?",
"Come gestiresti un errore o un'eccezione nel plugin?",
"Come renderesti un plugin configurabile senza modificare il codice?",
"Un plugin causa un forte aumento del lag. Come cercheresti il problema?",
"Un comando del tuo plugin smette improvvisamente di funzionare dopo un aggiornamento di Minecraft. Cosa fai?",
"Un plugin entra in conflitto con un altro plugin. Come individui la causa?",
"Un giocatore segnala un bug che tu non riesci a riprodurre. Come procedi?",
"Dopo un tuo aggiornamento, il server non si avvia più. Quali sono i tuoi primi passi?",
"Qual è il tuo progetto migliore che hai sviluppato?",
"Puoi fornire un link a un tuo progetto GitHub o ad altri lavori?",
"Saresti disposto/a a realizzare un piccolo test tecnico per ZexoMC?",
"Quanto tempo impiegheresti indicativamente a sviluppare un semplice plugin?",
"Come documenteresti il codice che scrivi?",
"Come gestisci le scadenze?",
"Come reagisci quando qualcuno segnala un errore nel tuo codice?",
"Sei disposto/a a collaborare con gli altri Developer e Staff?",
"Come gestisci il codice che contiene informazioni riservate del server?",
"Perché dovremmo scegliere te come Developer di ZexoMC?"
],

"Builder": [
"Qual è il tuo nickname Minecraft?",
"Qual è il tuo username Discord?",
"Quanti anni hai?",
"Da quanto tempo giochi a Minecraft?",
"Da quanto tempo costruisci su Minecraft?",
"Da quanto tempo conosci ZexoMC?",
"Quanto tempo puoi dedicare a ZexoMC ogni settimana?",
"Perché vuoi diventare Builder di ZexoMC?",
"Perché pensi di essere adatto/a a questo ruolo?",
"Quali sono, secondo te, le caratteristiche più importanti di un buon Builder?",
"Quali stili di costruzione conosci meglio?",
"Quale stile di costruzione preferisci?",
"Sai costruire ambientazioni fantasy?",
"Sai costruire ambientazioni moderne?",
"Sai costruire mappe per modalità PvP o minigiochi?",
"Hai esperienza nella costruzione di lobby Minecraft?",
"Hai esperienza nella costruzione di spawn?",
"Hai mai realizzato mappe o strutture per altri server Minecraft?",
"Puoi mostrare alcuni tuoi lavori precedenti?",
"Hai un portfolio, un link o delle immagini delle tue costruzioni?",
"Quali strumenti o plugin di building sai utilizzare?",
"Hai esperienza con WorldEdit?",
"Hai esperienza con VoxelSniper o strumenti simili?",
"Sai lavorare seguendo una progettazione o un tema stabilito?",
"Come reagisci quando uno Staffer ti chiede di modificare una tua costruzione?",
"Come gestisci una scadenza per completare una costruzione?",
"Come collaboreresti con altri Builder?",
"Cosa faresti se notassi un problema nella mappa mentre stai costruendo?",
"Quale progetto vorresti realizzare per ZexoMC?",
"Perché dovremmo scegliere te come Builder di ZexoMC?"
]
};

document.addEventListener("DOMContentLoaded", () => {
renderProducts();
renderCart();

const applicationForm = document.getElementById("application-form");
if (applicationForm) {
applicationForm.addEventListener("submit", submitApplication);
}

const staffForm = document.getElementById("staff-login-form");
if (staffForm) {
staffForm.addEventListener("submit", staffLogin);
renderStaffApplications();
}

captureReturn();
});

function money(value) {
return Number(value).toFixed(2).replace(".", ",");
}

function getCart() {
try {
return JSON.parse(localStorage.getItem("zexo_cart") || "[]");
} catch {
return [];
}
}

function saveCart(cart) {
localStorage.setItem("zexo_cart", JSON.stringify(cart));
renderCart();
}

function copyIP() {
const ip = "play.zexomc.it";

if (navigator.clipboard) {
navigator.clipboard
.writeText(ip)
.then(() => alert("IP copiato: " + ip))
.catch(() => alert("IP: " + ip));
} else {
alert("IP: " + ip);
}
}

function renderProducts() {
const container = document.getElementById("products");

if (!container) return;

container.innerHTML = PRODUCTS.map(product => ` <article
   class="product-card"
   style="border-top: 4px solid ${product.color};"
 > <div class="card-icon">⭐</div>

```
  <h3>${product.name}</h3>

  <div class="product-price">
    €${money(product.price)}
  </div>

  <p class="product-description">
    ${product.description}
  </p>

  <ul class="product-benefits">
    ${product.benefits
      .map(benefit => `<li>${benefit}</li>`)
      .join("")}
  </ul>

  <button
    type="button"
    class="btn primary"
    onclick="addToCart('${product.id}')"
  >
    🛒 Aggiungi al carrello
  </button>
</article>
```

`).join("");
}

function addToCart(id) {
const product = PRODUCTS.find(item => item.id === id);

if (!product) return;

const cart = getCart();
const existing = cart.find(item => item.id === id);

if (existing) {
existing.quantity += 1;
} else {
cart.push({
id: id,
quantity: 1
});
}

saveCart(cart);
}

function changeQuantity(id, amount) {
const cart = getCart();
const item = cart.find(product => product.id === id);

if (!item) return;

item.quantity += amount;

const newCart = cart.filter(product => product.quantity > 0);

saveCart(newCart);
}

function clearCart() {
saveCart([]);
}

function renderCart() {
const container = document.getElementById("cart-items");
const totalElement = document.getElementById("cart-total");

if (!container || !totalElement) return;

const cart = getCart();

if (cart.length === 0) {
container.innerHTML = `       <p>Il carrello è vuoto.</p>
    `;

```
totalElement.textContent = "0,00 €";
return;
```

}

let total = 0;

container.innerHTML = cart.map(item => {
const product = PRODUCTS.find(
product => product.id === item.id
);

```
if (!product) return "";

const subtotal = product.price * item.quantity;
total += subtotal;

return `
  <div class="cart-item">

    <div class="cart-item-info">
      <span class="cart-item-name">
        ${product.name}
      </span>

      <span class="cart-item-price">
        €${money(product.price)} × ${item.quantity}
      </span>
    </div>

    <div class="cart-controls">

      <button
        type="button"
        onclick="changeQuantity('${product.id}', -1)"
      >
        −
      </button>

      <span>${item.quantity}</span>

      <button
        type="button"
        onclick="changeQuantity('${product.id}', 1)"
      >
        +
      </button>

    </div>

    <strong>
      €${money(subtotal)}
    </strong>

  </div>
`;
```

}).join("");

totalElement.textContent = money(total) + " €";
}

async function checkout() {
const cart = getCart();

const message = document.getElementById("checkout-message");
const button = document.getElementById("checkout-btn");

if (cart.length === 0) {
if (message) {
message.textContent = "Aggiungi almeno un VIP al carrello.";
}
return;
}

let total = 0;

cart.forEach(item => {
const product = PRODUCTS.find(
product => product.id === item.id
);

```
if (product) {
  total += product.price * item.quantity;
}
```

});

if (button) {
button.disabled = true;
}

if (message) {
message.textContent = "Creazione del pagamento...";
}

try {
const response = await fetch(
"/.netlify/functions/create-order",
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
total: Number(total.toFixed(2)),
items: cart
})
}
);

```
const data = await response.json();

if (!response.ok) {
  throw new Error(
    data.details ||
    data.error ||
    "Errore nella creazione dell'ordine."
  );
}

const approvalLink = data.links?.find(
  link => link.rel === "approve"
);

if (!approvalLink) {
  throw new Error("Link PayPal non trovato.");
}

window.location.href = approvalLink.href;
```

} catch (error) {
console.error(error);

```
if (message) {
  message.textContent =
    "Errore PayPal: " + error.message;
}

if (button) {
  button.disabled = false;
}
```

}
}

function startApplication(role) {
const area = document.getElementById("application-area");
const title = document.getElementById("application-title");
const questionsBox = document.getElementById("questions");

if (!area || !questionsBox) return;

const questions = QUESTIONS[role];

if (!questions) return;

if (title) {
title.textContent = "Candidatura " + role;
}

questionsBox.innerHTML = questions.map(
(question, index) => ` <div class="question">

```
    <label for="question-${index}">
      ${index + 1}. ${question}
    </label>

    <textarea
      id="question-${index}"
      name="question-${index}"
      required
    ></textarea>

  </div>
`
```

).join("");

area.classList.remove("hidden");

const form = document.getElementById("application-form");

if (form) {
form.dataset.role = role;
}

window.scrollTo({
top: area.offsetTop - 80,
behavior: "smooth"
});
}

function closeApplication() {
const area = document.getElementById("application-area");

if (area) {
area.classList.add("hidden");
}
}

function submitApplication(event) {
event.preventDefault();

const form = event.currentTarget;
const role = form.dataset.role;

const answers = Array.from(
form.querySelectorAll("textarea")
).map(textarea => textarea.value.trim());

const applications = JSON.parse(
localStorage.getItem("zexo_applications") || "[]"
);

applications.push({
id: Date.now(),
role: role,
answers: answers,
status: "In attesa",
date: new Date().toLocaleString("it-IT")
});

localStorage.setItem(
"zexo_applications",
JSON.stringify(applications)
);

alert("Candidatura inviata!");

form.reset();
closeApplication();
}

function staffLogin(event) {
event.preventDefault();

const message = document.getElementById("staff-message");

if (message) {
message.textContent =
"Accesso Staff dimostrativo. Non inserire password reali.";
}

renderStaffApplications();
}

function renderStaffApplications() {
const container = document.getElementById("staff-applications");

if (!container) return;

const applications = JSON.parse(
localStorage.getItem("zexo_applications") || "[]"
);

if (applications.length === 0) {
container.innerHTML = `       <p>Nessuna candidatura caricata.</p>
    `;
return;
}

container.innerHTML = applications.map(
(application, index) => ` <div class="application-card">

```
    <h3>${application.role}</h3>

    <p>
      <strong>Data:</strong> ${application.date}
    </p>

    <p>
      <strong>Stato:</strong> ${application.status}
    </p>

    <details>
      <summary>Visualizza risposte</summary>

      ${application.answers.map(
        (answer, number) => `
          <p>
            <strong>${number + 1}.</strong>
            ${escapeHTML(answer)}
          </p>
        `
      ).join("")}
    </details>

    <br>

    <button
      type="button"
      class="btn secondary"
      onclick="setApplicationStatus(${index}, 'Accettata')"
    >
      ✅ Accetta
    </button>

    <button
      type="button"
      class="btn secondary"
      onclick="setApplicationStatus(${index}, 'Rifiutata')"
    >
      ❌ Rifiuta
    </button>

  </div>
`
```

).join("");
}

function setApplicationStatus(index, status) {
const applications = JSON.parse(
localStorage.getItem("zexo_applications") || "[]"
);

if (!applications[index]) return;

applications[index].status = status;

localStorage.setItem(
"zexo_applications",
JSON.stringify(applications)
);

renderStaffApplications();
}

function escapeHTML(text) {
return String(text)
.replaceAll("&", "&")
.replaceAll("<", "<")
.replaceAll(">", ">")
.replaceAll('"', """)
.replaceAll("'", "'");
}

async function captureReturn() {
const status = document.getElementById("capture-status");

if (!status) return;

const parameters = new URLSearchParams(
window.location.search
);

const token = parameters.get("token");

if (!token) {
status.textContent = "Ordine PayPal non trovato.";
return;
}

try {
const response = await fetch(
"/.netlify/functions/capture-order",
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
orderID: token
})
}
);

```
const data = await response.json();

if (!response.ok) {
  throw new Error(
    data.error || "Pagamento non completato."
  );
}

status.textContent =
  "Pagamento completato! Grazie per il tuo acquisto.";

localStorage.removeItem("zexo_cart");
```

} catch (error) {
console.error(error);

```
status.textContent =
  "Il pagamento non è stato completato: " +
  error.message;
```

}
}



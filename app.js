const PASSWORD =
    '>YlI6jO/SjxEE%k3d34^p25uZ4aHIR<\\Pqnwk"7sWbg#a/L.\'m';

const STORAGE_KEY = "prime_access";

const loginView =
    document.getElementById("loginView");

const blogView =
    document.getElementById("blogView");

const loginForm =
    document.getElementById("loginForm");

const passwordInput =
    document.getElementById("password");

const errorMessage =
    document.getElementById("errorMessage");

const blogMarkdown =
    document.getElementById("blogMarkdown");

const logoutBtn =
    document.getElementById("logoutBtn");

/* =========================
   AUTH
========================= */

function checkAuth() {

    const isAuthenticated =
        localStorage.getItem(STORAGE_KEY);

    if (isAuthenticated === "true") {
        showBlog();
    } else {
        showLogin();
    }
}

function showLogin() {

    loginView.classList.remove("hidden");

    blogView.classList.add("hidden");
}

function showBlog() {

    loginView.classList.add("hidden");

    blogView.classList.remove("hidden");

    renderMarkdown();
}

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const value = passwordInput.value;

    if (value === PASSWORD) {

        localStorage.setItem(STORAGE_KEY, "true");

        showBlog();

        passwordInput.value = "";

        errorMessage.style.display = "none";

    } else {

        errorMessage.style.display = "block";
    }
});

logoutBtn.addEventListener("click", () => {

    localStorage.removeItem(STORAGE_KEY);

    showLogin();
});

/* =========================
   MARKDOWN CONTENT
========================= */

const markdown = `

# SpaceX IPO Could Become the Biggest Market Event of the Decade

**Our internal estimation suggests that the upcoming SpaceX IPO on June 12 could generate more than $125 billion in market capitalization growth within the first week after launch.**

<div class="stats-grid">

  <div class="stat-card">
    <span>IPO Valuation</span>
    <h3>$300B</h3>
  </div>

  <div class="stat-card">
    <span>Projected Growth</span>
    <h3>200%+</h3>
  </div>

  <div class="stat-card">
    <span>Capital Inflow</span>
    <h3>$125B+</h3>
  </div>

</div>

---

## About SpaceX

<div class="article-image">

<img
src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1400&auto=format&fit=crop"
/>

</div>

### Key Factors

- **Global Brand Dominance** — SpaceX is one of the strongest technology brands worldwide.

- **Starlink Revenue Explosion** — Millions of active users globally continue driving recurring revenue.

- **Near-Monopoly Position** — SpaceX dominates commercial rocket launches.

- **AI & Defense Synergy** — Multiple trillion-dollar sectors intersect around SpaceX infrastructure.

---

## Historic Investor Demand

<div class="article-image">

<img
src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop"
/>

</div>

Public market access to SpaceX could trigger one of the strongest buying waves in modern IPO history.

---

## Estimated Price Growth

### Forecast

- IPO valuation: **$250–300 billion**

- Short-term valuation: **$600+ billion**

- Possible stock price growth: **200%+**

---

## AI, Defense & Infrastructure Exposure

<div class="article-image">

<img
src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop"
/>

</div>

SpaceX is positioned at the intersection of:

- Artificial intelligence infrastructure

- Satellite communications

- Defense technology

- Aerospace logistics

---

## Estimated Supply vs Demand

- Estimated public float: **5–10%**

- Institutional demand: **$500+ billion**

- Oversubscription level: **3x–7x**

`;

/* =========================
   RENDER
========================= */

function renderMarkdown() {

    blogMarkdown.innerHTML =
        marked.parse(markdown);
}

/* =========================
   INIT
========================= */

checkAuth();
const PASSWORD =
    '>YlI6jO/SjxEE%k3d34^p25uZ4aHIR<\\Pqnwk"7sWbg#a/L.\'m';

const PASSWORD2 = '058adac57414bdf4862a33f3a2da0e2b32c96400c2746fbfecab050383d840a25d';

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

/* AUTH */

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

/* CONTENT */

const markdown = `

<h2 id="terms">Welcome & Terms of Use</h2>

Welcome to our private community platform. This website is intended exclusively for approved members with authorized access credentials.

By logging in and using this platform, you agree to keep all shared information, market analysis, forecasts, estimations, and discussions strictly confidential and not distribute them outside the community.

Unauthorized access, sharing of credentials, copying of content, or misuse of the platform may result in immediate termination of access and possible legal action.

---

<h2 id="spacex-ipo">SpaceX IPO Could Become the Biggest Market Event of the Decade</h2>

<div class="article-image">

<img
src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=1600&auto=format&fit=crop"
/>

</div>

The upcoming SpaceX IPO on June 12 could generate more than $125 billion in market capitalization growth within the first week after launch.

<div class="stats-grid">

<div class="stat-card">
<span>IPO Valuation</span>
<h3>$300B</h3>
</div>

<div class="stat-card">
<span>Capital Inflow</span>
<h3>$125B+</h3>
</div>

<div class="stat-card">
<span>Projected Growth</span>
<h3>200%+</h3>
</div>

</div>

---

<h2 id="about-spacex">About SpaceX</h2>

<div class="article-image">

<img
src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1400&auto=format&fit=crop"
/>

</div>

### Key Factors

- Global Brand Dominance — SpaceX has become one of the most recognized technology brands worldwide.

- Starlink Revenue Explosion — Millions of active users globally continue driving recurring revenue.

- Near-Monopoly Position — SpaceX dominates commercial rocket launches with dramatic cost advantages.

- Elon Musk Effect — Companies associated with Elon Musk attract enormous retail and institutional attention.

- AI & Defense Synergy — SpaceX is positioned at the center of several trillion-dollar industries simultaneously.

---

<h2 id="interesting-numbers">Interesting Numbers</h2>

- Estimated private valuation before IPO: $250–300 billion

- Forecasted first-week capital inflow: $125+ billion

- Falcon 9 launch success rate: one of the highest in aerospace history

- Starlink satellites already in orbit: thousands deployed globally

- Potential long-term TAM: multi-trillion-dollar scale

---

<h2 id="our-position">Our Position</h2>

<div class="article-image">

<img
src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop"
/>

</div>

Market demand will significantly exceed available public supply during the first trading week, creating conditions for aggressive upward price movement fueled by institutional accumulation, retail speculation, and global media attention.

---

<h2 id="estimated-growth">Estimated Price Growth</h2>

Internal projection: SpaceX becomes one of the most explosive IPO launches ever seen on public markets.

### Forecast

- IPO valuation: $250–300 billion

- Short-term valuation: $600+ billion

- Capital inflow: $125–300+ billion

- Possible stock price growth: 200%+

---

<h2 id="why">Why?</h2>

### Historic Investor Demand

SpaceX has accumulated years of anticipation from both retail and institutional investors.

### Starlink Alone Could Justify Massive Valuation Expansion

Many analysts believe Starlink’s future global internet infrastructure business could eventually become larger than traditional telecom companies combined.

### Dominance in Space Industry

SpaceX currently leads the global launch market by a substantial margin.

### Elon Musk Market Impact

Companies associated with Elon Musk historically generate extreme market momentum and unprecedented trading volume.

---

<h2 id="ai-defense">AI, Defense & Infrastructure Exposure</h2>

<div class="article-image">

<img
src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop"
/>

</div>

SpaceX is positioned at the intersection of:

- Artificial intelligence infrastructure

- Satellite communications

- Defense technology

- Global internet services

- Aerospace logistics

---

<h2 id="key-numbers">Key Numbers</h2>

- Potential first-week trading volume: record-breaking levels

- Starlink users worldwide: millions and rapidly growing

- Rocket launch costs reduced dramatically through reusability

- Possible long-term valuation scenario: $1 trillion+ over time

---

<h2 id="shares">Who Will Have Access to SpaceX Shares?</h2>

Initial access to SpaceX IPO shares could be heavily concentrated among major institutional investors and selected brokerage networks.

### Expected Priority Access Groups

- Large investment funds and hedge funds

- Private banking clients

- Venture capital firms

- High-net-worth investors

- Selected brokerage clients with IPO access privileges

---

## Brokerages Likely to Offer Limited IPO Allocation

Retail access available through:

- Charles Schwab

- Fidelity Investments

- Morgan Stanley

- Robinhood

- E*TRADE

- Interactive Brokers

- JPMorgan Chase Private Bank

---

<h2 id="supply-demand">Estimated Supply vs Demand</h2>

- Potential IPO valuation: $250–300 billion

- Estimated publicly available float at launch: 5–10%

- Estimated first-week institutional demand: $500+ billion

- Estimated oversubscription level: 3x–7x higher than available supply

Such conditions historically create extreme volatility and aggressive upward price pressure during high-profile IPO launches.

`;

function renderMarkdown() {

    blogMarkdown.innerHTML =
        marked.parse(markdown);
}

checkAuth();
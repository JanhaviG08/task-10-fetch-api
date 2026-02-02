const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const fetchBtn = document.getElementById("fetchBtn");
const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");

function fetchQuote() {
    // UI state
    loadingEl.classList.remove("hidden");
    errorEl.classList.add("hidden");

    fetch("https://dummyjson.com/quotes/random")
        .then(response => {
            if (!response.ok) {
                throw new Error("API error");
            }
            return response.json();
        })
        .then(data => {
            quoteEl.textContent = `"${data.quote}"`;
            authorEl.textContent = `— ${data.author}`;
            console.log("Quote fetched:", data);
        })
        .catch(err => {
            errorEl.textContent = "Unable to fetch quote. Please try again.";
            errorEl.classList.remove("hidden");
            console.error("Fetch failed:", err);
        })
        .finally(() => {
            loadingEl.classList.add("hidden");
        });
}

fetchBtn.addEventListener("click", fetchQuote);

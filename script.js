
const button = document.getElementById("quoteBtn");
const quote = document.getElementById("quote");

button.addEventListener("click", async () => {
    quote.textContent = "hol' up..";

    try {
        const response = await fetch("https://api.kanye.rest/");
        const data = await response.json();

        quote.textContent = `"${data.quote}"`;
    } catch (error) {
        quote.textContent = "fauked";
        console.error(error);
    }
});

document.getElementById("poga_par_skyome").addEventListener("click", function () {
    window.location.href="#par_skyome";
});

async function fact() {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    document.getElementById("izvade").textContent = data.fact;
};

document.getElementById("cat_fact").addEventListener("click", function () {
    fact();
});

document.getElementById("menesis").addEventListener("change", function() {
    document.getElementById("ikona").src = this.value;
});
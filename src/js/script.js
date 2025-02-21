document.getElementById("button").addEventListener("click", function () {
    document.getElementById("izvade").innerHTML = "aa";
})

const response = await fetch("https://catfact.ninja/fact", {
  method: "POST",
})
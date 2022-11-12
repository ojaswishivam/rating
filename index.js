const thanksContainer = document.querySelector(".thank-you")

let mainContainer = document.querySelector(".container");

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function () {
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
})

let rating = document.getElementById("rating");
let rates = document.querySelectorAll(".btn");

for (var i = 0; i < rates.length; i++) {
    rates[i].addEventListener("click", function () {
        rating.innerHTML = this.innerText;
    })
}






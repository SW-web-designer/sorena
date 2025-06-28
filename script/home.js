let fourthSect = document.getElementsByClassName("fourth-section");
let shadowUp = document.getElementsByClassName("shadow-up");
let seeMoreBtn = document.getElementsByClassName("see-more");

// Events
seeMoreBtn.addEventListener("click", seeMore())

// Functions
function seeMore () {
    fourthSect.style.height = "auto !important";
    shadowUp.style.display = "none !important";
}
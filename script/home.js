let fourthSect = document.querySelector(".fourth-section");
let shadowUp = document.querySelector(".shadow-up");
let seeMoreBtn = document.querySelector(".see-more");

// Events
seeMoreBtn.addEventListener("click", seeMore);

// Functions
function seeMore () {
    fourthSect.style.height = "105.15rem";
    shadowUp.style.display = "none";
}

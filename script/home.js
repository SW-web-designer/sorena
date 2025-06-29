let fourthSect = document.querySelector(".fourth-section");
let shadowUp = document.querySelector(".shadow-up");
let seeMoreBtn = document.querySelector(".see-more");

// Events
seeMoreBtn.addEventListener("click", run1and2);

// Functions
// 1
function seeMore () {
    fourthSect.style.height = "105.15rem";
    shadowUp.style.opacity = "0";
}
// 2
function dNone () {
    shadowUp.style.display = "none";
}
// 3
function run1and2 () {
    seeMore();
    setTimeout(dNone, 500);
}

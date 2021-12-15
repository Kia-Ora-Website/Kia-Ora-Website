document.getElementById("burger-active").addEventListener("click", function () {
    var element = document.getElementById("side-bar");
    element.classList.toggle("sidebar--active");
});

document.getElementById("burger-active").addEventListener("click", function () {
    var element = document.getElementById("burger-active");
    element.classList.toggle("opened")
});

// document.getElementById("burger-icon").addEventListener("click", function () {
//     var element = document.getElementById("sidebar-id");
//     element.classList.toggle("sidebar--active");
// });

// document.getElementById("burger-icon").addEventListener("click", function () {
//     var element = document.getElementById("burger-icon");
//     element.classList.toggle("burgericon--active");
// });

// document.getElementById("sidebara").addEventListener("click", function () {
//     var element = document.getElementById("sidebar-id");
//     var element2 = document.getElementById("burger-icon");
//     element.classList.remove("sidebar--active");
//     element2.classList.remove("burger__icon--active");
// });
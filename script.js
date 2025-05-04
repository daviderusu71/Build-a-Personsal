var typed = new Typed(".input", {
    strings: ["Designer And Developer", "And Content Creator"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

let menu = document.querySelector("#menu-icon");
let navigation = document.querySelector(".navigation");

menu .onclick = () => {
    menu.classList.toggle('bx-x');
    navigation.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navigation.classList.remove('open');
}

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})
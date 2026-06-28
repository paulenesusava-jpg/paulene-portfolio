const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const header = document.getElementById("header");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

window.addEventListener("scroll", () => {

    if(window.scrollY > 20){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});
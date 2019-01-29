$('.hamburgerMenu').click(function () {
    $('nav').toggleClass('open');
    $('.hamburgerMenu span').toggleClass('openHamburger');
    $('.hamburgerWrapper').toggleClass('hamburgerWrapperOpen');
})

// const burger = document.querySelector('.hamburgerMenu');
// const iconBurger = document.querySelector('.hamburger');
// const iconX = document.querySelector('.fas.fa-times');

// burger.addEventListener("click", function () {

// })

// const openCloseNav = () => {
//     const navSection = document.querySelector("nav");
//     const spanHamburger = document.querySelectorAll(".hamburger span");
    
//     navSection.classList.toggle("active");
//     spanHamburger.forEach((span) => span.classList.toggle("openHamburger"));
    
//     }
//     hamburgerMenu.addEventListener("click", openCloseNav);
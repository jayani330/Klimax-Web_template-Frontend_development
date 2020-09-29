//create function to select elements
const selectElement = (element) => document.querySelector(element);

//open and close nav on click
selectElement('.menu-toggle').addEventListener('click', ()=>{
    selectElement('nav').classList.toggle('active');
});

//for hamburger menu effect
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const links = document.querySelectorAll('.nav-list li');

menuToggle.addEventListener('click', ()=>{
    navList.classList.toggle('open');
});




//slider
$(document).ready(function(){
    $('.partners-logos').slick({
        slidesToShow:4,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:1500,
        arrows:false,
        dots:false,
        pauseOnHover:true,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]

    });

});



//scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-left-after',{
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 1000
});

sr.reveal('.animate-right',{
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top',{
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});


sr.reveal('.animate-bottom',{
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom-after',{
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 1200
});
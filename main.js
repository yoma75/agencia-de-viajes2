let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');


// ----------- login form container --------------------
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
// ----------- /login form container --------------------


// ----------- icono menu-bars --------------------
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
// ----------- /icono menu-bars --------------------


// ----------- control botones videos home.css --------------------
let videoBtn = document.querySelectorAll('.vid-btn');


// ---- remueve el menu y buscar, al mover el scroll del mouse -----
window.onscroll = () =>{
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
  menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
// -------------------------------------------------------

  // ----------- icono menu-bars --------------------
  menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });
  // ----------- /icono menu-bars --------------------
  

  // ---------- icono de buscar ------------
  searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
  });
  // ---------- /icono de buscar ------------


// ----------- login form container --------------------
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
// ----------- /login form container --------------------


// ----------- puntos del control videos --------------------
videoBtn.forEach(btn =>{
  btn.addEventListener('click', ()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
  });
});
// ----------- /puntos del control videos --------------------

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});
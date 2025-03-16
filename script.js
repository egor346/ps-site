const menu = document.querySelector('.menu')
const burger = document.querySelector('.burger')
burger.addEventListener('click', ()=>{
   menu.classList.toggle('isOpen')
})
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
    autoplay: {
    delay: 10000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
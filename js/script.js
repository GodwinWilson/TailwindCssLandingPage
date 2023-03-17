//Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
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

//Change Header Colour on Scroll
function changeBgColor() {
  let navbar = document.getElementById('nav');
  let scrollValue = window.scrollY

  if(scrollValue < 10){
    navbar.classList.remove('bgColor')
  
  } else {
    navbar.classList.add('bgColor')
  }

}
window.addEventListener('scroll', changeBgColor)


//Hamburger
let menuBtn = document.getElementById('menu-btn')
let dropMenu = document.getElementById('menu')


menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open')
  dropMenu.classList.toggle('flex')
  dropMenu.classList.toggle('hidden')
})

//Services
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')

document.querySelector('#three').onclick = () =>{
  three.classList.toggle('active')
  two.classList.remove('active')
  one.classList.add('active')
}

document.querySelector('#two').onclick = () => {
  two.classList.toggle('active')
  three.classList.remove('active')
  one.classList.add('active')
}

document.querySelector('#one').onclick = () => {
  one.classList.toggle('active')
  two.classList.remove('active')
  three.classList.remove('active')
}

let bussiness = document.querySelector('.buss')
let expertise = document.querySelector('.exp')
let quality = document.querySelector('.qua')
let qua = document.querySelector('#qua')
let buss = document.querySelector('#buss')
let exp = document.querySelector('#exp')

document.querySelector('#exp').onclick = () => {
  expertise.classList.add('active')
  exp.classList.add('active')
  buss.classList.add('active')
  qua.classList.remove('active')
  bussiness.classList.add('active')
  quality.classList.remove('active')
}

document.querySelector('#qua').onclick = () => {
  quality.classList.add('active')
  qua.classList.add('active')
  exp.classList.remove('active')
  buss.classList.add('active')
  bussiness.classList.add('active')
  expertise.classList.remove('active')
}

document.querySelector('#buss').onclick = () => {
  bussiness.classList.remove('active')
  buss.classList.remove('active')
  qua.classList.remove('active')
  exp.classList.remove('active')
  expertise.classList.remove('active')
  quality.classList.remove('active')
}

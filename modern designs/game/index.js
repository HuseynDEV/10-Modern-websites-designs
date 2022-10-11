let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.menu')

menu.onclick = () => {
  menu.classList.toggle('move')
  navbar.classList.toggle('active')
}

let bell = document.querySelector('.notification')

document.querySelector('#bell-icon').addEventListener('click', () => {
  bell.classList.toggle('active')
})



var swiper = new Swiper(".trending-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

let scroll=document.getElementById('scroll-bar')

// window.onscroll=function(){myfunction()}

const myfunction = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  let scrolled = (winScroll / height) * 100
  document.getElementById('scroll-bar').style.width=scrolled+'%'
  // console.log( document.documentElement.clientHeight)
  console.log(document.documentElement.scrollHeight)
}

window.addEventListener('scroll', myfunction)
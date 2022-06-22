// Reservation steps

const firstArrow = document.querySelector('.first_arrow_down')
const arrowOne = document.querySelector('.first_arrow')
const firstStep = document.querySelector('.booking_footer__right_first-step')
const firstText = document.querySelector('.booking_footer__right_first_text')

const secondArrow = document.querySelector('.second_arrow_down')
const arrowTwo = document.querySelector('.second_arrow')
const secondStep = document.querySelector('.booking_footer__right_second-step')
const secondText = document.querySelector('.booking_footer__right_second_text')

const thirdArrow = document.querySelector('.third_arrow_down')
const arrowThree = document.querySelector('.third_arrow')
const thirdStep = document.querySelector('.booking_footer__right_third-step')
const thirdText = document.querySelector('.booking_footer__right_third_text')

firstArrow.addEventListener('click', () => {
  firstStep.classList.toggle('active')
  firstText.classList.toggle('active')
  firstArrow.classList.toggle('active')
  arrowOne.classList.toggle('active')
})

secondArrow.addEventListener('click', () => {
  secondStep.classList.toggle('active')
  secondText.classList.toggle('active')
  secondArrow.classList.toggle('active')
  arrowTwo.classList.toggle('active')
})

thirdArrow.addEventListener('click', () => {
  thirdStep.classList.toggle('active')
  thirdText.classList.toggle('active')
  thirdArrow.classList.toggle('active')
  arrowThree.classList.toggle('active')
})

// Reservation steps

// Slider Feedback

const swiper = new Swiper('.swiper', {
  speed: 1000,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  autoplay: {
    delay: 4000,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
})

// Dropdown for phone Size

const dropdownBtn = document.querySelector('.dropdown_button')
const dropdownMenu = document.querySelector('.dropdown_content')
const body = document.querySelector('body')

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active_dropdown')
})

body.addEventListener('click', (event) => {
  if (
    !event.target.classList.contains('material-icons') &&
    !event.target.classList.contains('dropdown_link')
  ) {
    dropdownMenu.classList.remove('active_dropdown')
  }
})

// Dropdown for phone Size

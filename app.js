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
const dropdownOpen = document.querySelector('.nav_dropdown')
const dropdownContent = document.querySelector('.dropdown__content')
const dropdownBody = document.querySelector('.dropdown__body')
const dropdownLink = document.querySelectorAll('.dropdown__link')
const dropdownLinks = document.querySelector('.dropdown__links')
const dropdownClose = document.querySelector('.dropdown__close')
const body = document.querySelector('body')

dropdownClose.addEventListener('click', (e) => {
  e.stopPropagation()
  dropdownContent.classList.remove('_drop')
  dropdownLink.forEach((link) => link.classList.remove('_drop'))
  body.classList.remove('_drop')
})

dropdownBody.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log(e.target.classList)
  if (e.target.classList[0] !== 'dropdown__link') {
    body.classList.remove('_drop')
    dropdownContent.classList.remove('_drop')
    dropdownLink.forEach((link) => link.classList.remove('_drop'))
  }
})

dropdownOpen.addEventListener('click', () => {
  dropdownContent.classList.add('_drop')
  body.classList.add('_drop')

  for (let i = 0; i < dropdownLink.length; i++) {
    const dropLink = dropdownLink[i]
    setTimeout(() => {
      dropLink.classList.add('_drop')
    }, 200)
  }
})

// Dropdown for phone Size

// Scroll Animation
AOS.init({
  disable: false,
})

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

const slides = document.querySelectorAll('.slider .slider-line .slider_item')
const sliderLine = document.querySelector('.slider-line')
const dots = document.querySelectorAll('.dot')

let currentDot = 0;
let count = 0;
let width;

function init() {

    width = document.querySelector('.slider').offsetWidth;

    sliderLine.style.width = width * slides.length + 'px';

    slides.forEach(item => {
        item.style.width = width + 'px'
        item.style.height = 'auto'
    })

    rollSlider()
}

window.addEventListener('resize', init)
init()

document.querySelector('.slider_next').addEventListener('click', () => {
    count++
    if (count >= slides.length) {
        count = 0;
    }

    rollSlider()

    currentDot = count
    dots.forEach((item, index) => {
        if (index === currentDot) {
            item.classList.toggle('active_dot')
        } else {
            item.classList.remove('active_dot')
        }
    })
})

document.querySelector('.slider_prev').addEventListener('click', () => {
    count--
    if (count < 0) {
        count = slides.length - 1
    }

    rollSlider()

    currentDot = count
    dots.forEach((item, index) => {
        if (index === currentDot) {
            item.classList.toggle('active_dot')
        } else {
            item.classList.remove('active_dot')
        }
    })
})

function autoSlide() {
    count++
    if (count >= slides.length) {
        count = 0;
    }

    rollSlider()

    currentDot = count
    dots.forEach((item, index) => {
        if (index === currentDot) {
            item.classList.toggle('active_dot')
        } else {
            item.classList.remove('active_dot')
        }
    })
}

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)'
}

setInterval(autoSlide, 4000)

// Slider Feedback


// Dropdown for phone Size

const dropdownBtn = document.querySelector('.dropdown_button')
const dropdownMenu = document.querySelector('.dropdown_content')
const body = document.querySelector('body')





dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active_dropdown')
})

body.addEventListener('click', (event) => {
    if (!event.target.classList.contains('material-icons') && !event.target.classList.contains('dropdown_link')) {
        dropdownMenu.classList.remove('active_dropdown')
    }
})


// Dropdown for phone Size

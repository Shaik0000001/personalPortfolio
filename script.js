// Smooth scroll for navigation links

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

if(this.hash !== ""){

e.preventDefault()

const target = document.querySelector(this.hash)

target.scrollIntoView({
behavior:"smooth"
})

}

})

})



// Contact button action

const contactButton = document.querySelector(".main-btn")

if(contactButton){

contactButton.addEventListener("click", function(){

window.location.href = "mailto:mahaboobbashashaik671@gmail.com"

})

}



// Download CV button

const cvButton = document.querySelector(".cv-btn")

if(cvButton){

cvButton.addEventListener("click", function(e){

e.preventDefault()

alert("CV download will be added soon")

})

}



// Simple scroll animation for project cards

const cards = document.querySelectorAll(".project-card")

window.addEventListener("scroll", () => {

cards.forEach(card => {

const position = card.getBoundingClientRect().top
const screenPosition = window.innerHeight / 1.3

if(position < screenPosition){

card.style.opacity = "1"
card.style.transform = "translateY(0)"

}

})

})



// Initial card animation style

cards.forEach(card => {

card.style.opacity = "0"
card.style.transform = "translateY(40px)"
card.style.transition = "all 0.6s ease"

})

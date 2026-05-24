const navLinks = document.querySelectorAll(".nav-link")

navLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
            target.scrollIntoView({ behavior: "smooth" })
        }
    })
})

const skillCards = document.querySelectorAll(".skill-card",)

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible")
        }
    })
})

skillCards.forEach(function(card) {
    observer.observe(card)
})

gsap.registerPlugin(ScrollTrigger)

gsap.from("#hero h1", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out"
})

gsap.from("#hero p", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
})

gsap.from("#hero .btn", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.6,
    ease: "power3.out",
    stagger: 0.2
})

gsap.from("#about img", {
    scrollTrigger: {
        trigger: "#about img",
        start: "top 80%"
    },
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power3.out"
})

gsap.from("#about .col-md-6:last-child", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%"
    },
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power3.out"
})

gsap.from("#projects .col-md-4", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%"
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power3.out"
})

const codeLines = [
    'const developer = {',
    '  name: "Prince Okoro",',
    '  university: "Babcock",',
    '  skills: ["Python", "Java",',
    '           "JS", "C++"],',
    '  available: true,',
    '  passion: "Building things',
    '            that intrigue me"',
    '}',
    '',
    'console.log(developer.name)',
    '// "Prince Okoro"'
]

const terminalCode = document.getElementById("terminal-code")
let fullText = codeLines.join('\n')
let index = 0

function typeCode() {
    if (index < fullText.length) {
        terminalCode.textContent += fullText[index]
        index++
        setTimeout(typeCode, 35)
    }
}

typeCode()

emailjs.init("AE_KB6WdDr9Geakxy")

const contactForm = document.querySelector(".Contact-form")

contactForm.addEventListener("submit", function(e) {
    e.preventDefault()

    emailjs.sendForm("service_dmougod", "template_z2pe4zq", this)
        .then(function() {
            alert("Message sent successfully!")
            contactForm.reset()
        })
        .catch(function(error) {
            alert("Failed to send message. Please try again.")
            console.error(error)
        })
})
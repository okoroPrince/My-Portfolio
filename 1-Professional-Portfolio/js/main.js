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

const skillCards = document.querySelectorAll(".skill-card")

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
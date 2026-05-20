const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault()

        const target = document.querySelector(this.getAttribute("href"))

        target.scrollIntoView({behavior: "smooth"})
    })
})
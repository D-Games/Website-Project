let toTopBtn = document.getElementById("backToTheTopBtn");

function backToTheTop() {
    document.documentElement.scrollTop = 0;
}

let contactForm = document.getElementById("contactFormContainer");

function openContactForm() {
    contactForm.style.display = "flex";
}
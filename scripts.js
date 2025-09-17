// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button functionality
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "↑";
backToTopButton.classList.add("back-to-top");
document.body.appendChild(backToTopButton);

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Menu Toggle
const mobileMenuButton = document.createElement("button");
mobileMenuButton.innerHTML = "☰"; // Hamburger Icon
mobileMenuButton.classList.add("mobile-menu-button");
document.body.appendChild(mobileMenuButton);

const nav = document.querySelector("header nav");

mobileMenuButton.addEventListener('click', function() {
    nav.classList.toggle("open");
});

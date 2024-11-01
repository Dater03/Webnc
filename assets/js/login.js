document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const validEmail = "adminGroup6@gmail.com";
    const validPassword = "admin";

    if (email === validEmail && password === validPassword) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = "index.html";
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slider-container img');
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000);
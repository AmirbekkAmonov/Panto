
const dropdownToggle = document.querySelector('.dropdown__toggle');
const dropdownMenu = document.querySelector('.navbar__dropdown-menu');
const header = document.querySelector('.panto_header');

dropdownToggle.addEventListener('click', (e) => {
    e.preventDefault(); 
    dropdownMenu.classList.toggle('show'); 
});

document.addEventListener('click', (e) => {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('shrink'); 
    } else {
        header.classList.remove('shrink'); 
    }
});


document.querySelector('.panto_burger').addEventListener('click', function() {
    document.querySelector('.navbar__mobile__menu').style.display = 'flex';
});

function closeMenu() {
    document.querySelector('.navbar__mobile__menu').style.display = 'none';
}




const wrapper = document.querySelector('.carousel__wrapper');
const cards = document.querySelectorAll('.carousel__card');
const prevBtn = document.querySelector('.carousel__btn--prev');
const nextBtn = document.querySelector('.carousel__btn--next');

let currentIndex = 0;

function updateCarousel() {
    wrapper.style.transform = `translateX(-${currentIndex * (cards[0].offsetWidth + 35)}px)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});
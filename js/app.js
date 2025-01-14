
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


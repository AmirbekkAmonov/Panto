
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


document.querySelector('.panto_burger').addEventListener('click', function () {
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
    wrapper.style.transition = 'transform 0.3s ease-in-out';
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.length - 1; 
    }
    updateCarousel();
});



const carousel = document.querySelector('.carousel');
const prevBtn2 = document.querySelector('.prev-btn');
const nextBtn2 = document.querySelector('.next-btn');

let scrollAmount = 0;

nextBtn2.addEventListener('click', () => {
    const scrollWidth = carousel.scrollWidth / 4;
    scrollAmount += scrollWidth;
    if (scrollAmount >= carousel.scrollWidth) {
        scrollAmount = 0;
    }
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
    });
});

prevBtn2.addEventListener('click', () => {
    const scrollWidth = carousel.scrollWidth / 4;
    scrollAmount -= scrollWidth;
    if (scrollAmount < 0) {
        scrollAmount = carousel.scrollWidth - scrollWidth;
    }
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const bagSpans = document.querySelectorAll(".bag_count"); 
    const addButtons = document.querySelectorAll(".add-btn");

    addButtons.forEach((addButton) => {
        addButton.addEventListener("click", () => {
            bagSpans.forEach(bagSpan => {
                let count = parseInt(bagSpan.textContent);
                bagSpan.textContent = count + 1;
            });

            if (!addButton.previousElementSibling || !addButton.previousElementSibling.classList.contains("count-display")) {
                const subtractButton = document.createElement("button");
                subtractButton.textContent = "-";
                subtractButton.classList.add("subtract-btn");

                const countDisplay = document.createElement("span");
                countDisplay.textContent = "1";
                countDisplay.classList.add("count-display");

                subtractButton.addEventListener("click", () => {
                    let count = parseInt(bagSpans[0].textContent);  
                    let itemCount = parseInt(countDisplay.textContent);

                    if (itemCount > 0) {
                        bagSpans.forEach(bagSpan => {
                            bagSpan.textContent = count - 1;
                        });
                        countDisplay.textContent = itemCount - 1;
                    }

                    if (parseInt(countDisplay.textContent) === 0) {
                        countDisplay.remove();
                        subtractButton.remove();
                    }
                });

                addButton.parentNode.insertBefore(subtractButton, addButton);
                addButton.parentNode.insertBefore(countDisplay, addButton);
            } else {
                const countDisplay = addButton.previousElementSibling;
                countDisplay.textContent = parseInt(countDisplay.textContent) + 1;
            }
        });
    });
});








document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.product_filter button');
    const carouselItems = document.querySelectorAll('.carousel-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            
            carouselItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block'; 
                } else {
                    item.style.display = 'none'; 
                }
            });
        });
    });
});









const burgerButton = document.querySelector('.panto_burger');
const closeButton = document.querySelector('.close-btn');
const body = document.querySelector('body');
const links = document.querySelectorAll('.navbar__mobile__menu a'); 

burgerButton.addEventListener('click', () => {
  body.style.overflow = 'hidden'; 
  document.querySelector('.navbar__mobile__menu').style.display = 'block'; 
});

closeButton.addEventListener('click', () => {
  closeMenu(); 
});

links.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu(); 
  });
});

function closeMenu() {
  body.style.overflow = 'auto'; 
  document.querySelector('.navbar__mobile__menu').style.display = 'none'; 
}

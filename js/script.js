document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
  
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  });
  
function handleButtonClick(selected) {
    const takeoutButton = document.getElementById('Packaging');
    const dineinButton = document.getElementById('Hall');

    if (selected === 'takeout') {
        takeoutButton.classList.add('active');
        takeoutButton.classList.remove('inactive');
        dineinButton.classList.add('inactive');
        dineinButton.classList.remove('active');

        // 페이지 이동
        window.location.href = 'http://127.0.0.1:5500/index.html'; // 포장 페이지 URL
    } else if (selected === 'dinein') {
        dineinButton.classList.add('active');
        dineinButton.classList.remove('inactive');
        takeoutButton.classList.add('inactive');
        takeoutButton.classList.remove('active');

        // 페이지 이동
        window.location.href = 'http://127.0.0.1:5500/Hall/index.html'; // 매장 페이지 URL
    }
}
let currentSlide = 0;



const slider = document.getElementById('slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const itemWidth = slider.querySelector('.menu-item').offsetWidth;
const totalItems = slider.children.length;
const visibleItems = 3;

function updateSlider() {
    const offset = -(currentIndex * itemWidth);
    slider.style.transform = `translateX(${offset}px)`;
}

function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex >= totalItems - visibleItems;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
        updateButtons();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
        updateSlider();
        updateButtons();
    }
});

updateButtons();

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
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const indicators = document.querySelectorAll('.indicators div');

let index = 0;

function showSlide(i) {
    slides.style.transform = `translateX(${-i * 100}%)`;
    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[i].classList.add('active');
}

next.addEventListener('click', () => {
    index = (index + 1) % slide.length;
    showSlide(index);
});

prev.addEventListener('click', () => {
    index = (index - 1 + slide.length) % slide.length;
    showSlide(index);
});

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        index = i;
        showSlide(index);
    });
});

const slid = document.querySelector('.slides-1');
const sli = document.querySelectorAll('.slide-1');
const pre = document.querySelector('.prev-1');
const nex = document.querySelector('.next-1');
const dotW = document.querySelectorAll('.dot-1');

let currentInde = 0;

function updateSlider(index) {
    slid.style.transform = `translateX(-${index * 100}%)`; // Adjusted for visible neighboring slides
    sli.forEach((s, i) => {
        s.classList.remove('active-1');
        if (i === index) {
            s.classList.add('active-1');
        }
    });
    dotW.forEach(dotS => dotS.classList.remove('active-1'));
    dotW[index].classList.add('active-1');
}

function showNextSlide() {
    currentInde = (currentInde + 1) % sli.length;
    updateSlider(currentInde);
}

function showPrevSlide() {
    currentInde = (currentInde - 1 + sli.length) % sli.length;
    updateSlider(currentInde);
}

nex.addEventListener('click', showNextSlide);
pre.addEventListener('click', showPrevSlide);

dotW.forEach((dotS, index) => {
    dotS.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentInde);
    });
});

// Initialize slider
updateSlider(currentInde);

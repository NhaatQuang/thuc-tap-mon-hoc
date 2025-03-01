// banner
let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slides img").length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    slides.style.transform = `translateX(${-currentIndex * 100}vw)`;
}
// sanpham
const container = document.querySelector('.product-container');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function slide(direction) {
    if (direction === "next") {
        container.appendChild(container.firstElementChild);
    } else {
        container.prepend(container.lastElementChild);
    }
}

nextBtn.addEventListener("click", () => slide("next"));
prevBtn.addEventListener("click", () => slide("prev"));
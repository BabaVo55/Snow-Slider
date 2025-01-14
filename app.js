const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let activeIndex = Math.floor(slides.length / 2);


function updateSlideTransforms(){
    slides.forEach((slide, index) => {

        const diff = index - activeIndex;
        slide.classList.remove("active");

        if (diff < 0) {
            slide.style.transform = `rotate${diff * 5}deg`;
            translateY($)
        }
    })
}
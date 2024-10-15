// First Slider
const slides = document.querySelectorAll('.slide');
var counter = 0;

// Positioning slides side by side
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});


// const goPrev = () => {
    //     if (counter > 0) {
    //         counter--;
    //         slideImage();
    //     } else {
    //         // Optional: Loop to the last slide
    //         counter = slides.length - 1;
    //         slideImage();
    //     }
    // }
    
    // const goNext = () => {
    //     if (counter < slides.length - 1) {
    //         counter++;
    //         slideImage();
    //     } else {
    //         // Optional: Loop to the first slide
    //         counter = 0;
    //         slideImage();
    //     }
    // }

const slideImage = () => {
    counter++;
    if (counter === slides.length) { // Corrected from slide.length to slides.length
        counter = 0;
    }
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

setInterval(slideImage, 2000); // Slide every 2 seconds




// Second Slider
const slides1 = document.querySelectorAll('.slide1');
var counter1 = 0;

// Positioning second set of slides side by side
slides1.forEach((slide1, index) => {
    slide1.style.left = `${index * 100}%`;
});

const slideImage1 = () => {
    counter1++;
    if (counter1 === slides1.length) { // Corrected from slide.length to slides1.length
        counter1 = 0;
    }
    slides1.forEach((slide1) => {
        slide1.style.transform = `translateX(-${counter1 * 100}%)`; // Corrected from counter to counter1
    });
}

setInterval(slideImage1, 2500); // Slide every 2 seconds

const s4_track = document.querySelector(".s42_slides");

var s4_slides = Array.from(s4_track.children);

const s4_prevButton = document.querySelector(".section_4_two a:first-of-type");

const s4_nextButton = document.querySelector(".section_4_two a:last-of-type");

const slideWidth = s4_slides[0].getBoundingClientRect().width;

const updateImage = () => {

    const header_navbar_img = document.querySelector(".section_1 img");
    const section_3_img = document.querySelector(".section_3 img");

    if(window.innerWidth>750)
    {
        section_3_img.srcset='images/homepage_steps.png';
        header_navbar_img.src='images/Mars_okrs_b_2x.png';
    }

    if(window.innerWidth<=750)
    {
       section_3_img.srcset='images/steps_m_2x.png';
       header_navbar_img.src='images/elon_okrs_2x.png';
    }
    
}

// const cloneFirst = s4_slides[0].cloneNode(true);
// const cloneLast = s4_slides[s4_slides.length-1].cloneNode(true);

// s4_track.appendChild(cloneFirst);
// s4_track.insertBefore(cloneLast,s4_slides[0]);

// s4_slides = Array.from(s4_track.children);

//arrange the slides next to one another

const setSlidePosition = (slide,index) => {
    slide.style.left = index*slideWidth + 'px';
}

s4_slides.forEach(setSlidePosition);

// when I click left, move sldies to the left
s4_prevButton.addEventListener("click", e => {
    const currentSlide = s4_track.querySelector(".current-slide");
    const nextSlide = currentSlide.previousElementSibling;
    const amountToMove = nextSlide.style.left;
    // move to nextSlide
    s4_track.style.transform = `translateX(-${amountToMove})`;
    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");

});


// when I click right , move slides to the right

s4_nextButton.addEventListener("click", e => {
    const currentSlide = s4_track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    // move to nextSlide
    s4_track.style.transform = `translateX(-${amountToMove})`;
    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");

});

// window resize event listener


updateImage();
window.addEventListener('resize',updateImage);


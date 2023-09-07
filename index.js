const s4_track = document.querySelector(".s42_slides");

var s4_slides = Array.from(s4_track.children);

var index = 0;

const cloneFirst = s4_slides[0].cloneNode(true);
const cloneLast = s4_slides[s4_slides.length-1].cloneNode(true);

s4_track.appendChild(cloneFirst);
s4_track.insertBefore(cloneLast,s4_slides[0]);

s4_slides = Array.from(s4_track.children);

const slidesLength = s4_slides.length;


const s4_prevButton = document.querySelector(".section_4_two a:first-of-type");

const s4_nextButton = document.querySelector(".section_4_two a:last-of-type");

const slideWidth = s4_slides[0].getBoundingClientRect().width;

console.log(`slideWidth : ${slideWidth}`);

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

//arrange the slides next to one another

const setSlidePosition = (slide,index) => {
    slide.style.left = index*slideWidth + 'px';
}

s4_slides.forEach(setSlidePosition);

const keepslides_right = () => {

    if(window.innerWidth<750)
    {
        s4_slides.forEach(setSlidePosition);
    }

}

const moveSlideLeft = () => {
   
    var positionSelf = s4_track.offsetLeft;
    
    //move to previousSlide
    s4_track.style.left = positionSelf+slideWidth + 'px';
    
}

const moveSlideRight = () => {

    console.log("hi ");
    var positionSelf = s4_track.offsetLeft;
     console.log(positionSelf-slideWidth);
     //move to nextSlide
    s4_track.style.left = positionSelf-slideWidth + 'px';
     
}

const checkIndex = () => {
    // s4_track.classList.remove("shifting");
    if(index === -1)
    {
        s4_track.style.left = -(slidesLength * slideWidth) + "px";
        index = slidesLength - 1;
    }

    if(index === slidesLength)
    {
        s4_track.style.left = -(1 * slideWidth) + "px";
        index = 0;
    }
}

// when I click left, move sldies to the left
s4_prevButton.addEventListener('click',moveSlideLeft);


// when I click right , move slides to the right

s4_nextButton.addEventListener('click', moveSlideRight);



updateImage();

// window resize event listener

window.addEventListener('resize',updateImage);
window.addEventListener('resize',keepslides_right);

// when the transition ends, the event listener

window.addEventListener('transitionend',checkIndex);


const s4_track = document.querySelector(".s42_slides");

var s4_slides = Array.from(s4_track.children);

let slideIndex_2 = 0;

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

const moveSlideLeft = () => {
   
    slideIndex_2--;

    if(slideIndex_2 == -1)
    {
        let offset_dup = -700;

        s4_slides.forEach((slide,index) => {
            slide.classList.remove("shifting");
            slide.style.transform = `translate(${offset_dup + index*100}%)`;
        })
        slideIndex_2 = 4;
    }

    const offset = -(slideIndex_2*100);
     
    s4_slides.forEach((slide,index) => {
        slide.classList.add("shifting");
    slide.style.transform = `translateX(${offset + index*100}%)`;
    });
    
}

const moveSlideRight = () => {

    let offset_dup = -100;

    slideIndex_2++;

    if(slideIndex_2 === slidesLength)
    {
        s4_slides.forEach((slide,index) => {
            slide.classList.remove("shifting");
            slide.style.transform = `translate(${offset_dup + index*100}%)`;
        })
        slideIndex_2 = 2;
    }

    const offset = -(slideIndex_2*100);

    s4_slides.forEach((slide,index) => {
        slide.classList.add("shifting");
    slide.style.transform = `translateX(${offset + index*100}%)`;
    });
    
    

    
     
}

// when I click left, move sldies to the left
s4_prevButton.addEventListener('click',moveSlideLeft);


// when I click right , move slides to the right

s4_nextButton.addEventListener('click', moveSlideRight);

// By default we need the second slide to appear , so

moveSlideRight();



updateImage();

// window resize event listener

window.addEventListener('resize',updateImage);

// the awards section javascript

let slideIndex_3 = 0;

const top_track_3 = document.querySelector(".section_7 .awards_7");

let slides_3 = document.querySelectorAll(".awards_7 .slide");

let totalSlides_3 = slides_3.length;

let cloneFirsta_3 = slides_3[0].cloneNode(true);

top_track_3.appendChild(cloneFirsta_3);

slides_3 = Array.from(top_track_3.children);

totalSlides_3 = slides_3.length;

function updateSlide3Position(){
     const offsetX_3 = -slideIndex_3*100;
     slides_3.forEach((slide,index) => {
           slide.classList.add("shifting");
           slide.style.transform = `translateX(${offsetX_3 + index*100}%)`;
     })
     slideIndex_3++;
     if(slideIndex_3 === totalSlides_3+1)
     {
           
           slides_3.forEach((slide,index) => {
            slide.classList.remove("shifting");
            slide.style.transform= `translateX(${index*100}%)`;
           });
           slideIndex_3=1;
           
     }
}

updateSlide3Position();
setInterval(updateSlide3Position,3000);
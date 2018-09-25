const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const mOne = document.querySelector('.m-1');
const mPara = document.querySelector('.m-p');

let counter = 1;
let i = 0;
let size = carouselImages[0].clientWidth;

const primaryText = ["Assam Engineering College","Primary Text 2","Primary Text 3","Primary Text 4","Primary Text 5"];
const quoteText = [
                        "Electronics and Telecommunication and Computer Science Department",
                        "Creativity is the process of having original ideas that have value. It is a process; it's not random.",
                        "Creativity is the process of having original ideas that have value. It is a process; it's not random.",
                        "Creativity is the process of having original ideas that have value. It is a process; it's not random.",
                        "Creativity is the process of having original ideas that have value. It is a process; it's not random."
                    ];

carouselSlide.style.transform = 'translate(' +(-size*counter) +'px)';

nextBtn.addEventListener('click',()=>{
    size = carouselImages[0].clientWidth;
    
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition= 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translate(' +(-size*counter) +'px)';

    i++;
    if(i>=5){i=0;}
    mOne.textContent = primaryText[i];
    mPara.textContent = quoteText[i];
    clearInterval(slideTimer);
});

function callSlide(){
    size = carouselImages[0].clientWidth;
    
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition= 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translate(' +(-size*counter) +'px)';

    i++;
    if(i>=5){i=0;}
    mOne.textContent = primaryText[i];
    mPara.textContent = quoteText[i];
}

prevBtn.addEventListener('click',()=>{
    size = carouselImages[0].clientWidth;

    if(counter <= 0) return;
    carouselSlide.style.transition= 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translate(' +(-size*counter) +'px)';

    i--;
    if(i<=-1){i=4;}
    mOne.textContent = primaryText[i];
    mPara.textContent = quoteText[i];
    clearInterval(slideTimer);
});

carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImages[counter].id==='lClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translate(' +(-size*counter) +'px)';
    }

    if(carouselImages[counter].id==='fClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translate(' +(-size*counter) +'px)';
    }
});

const slideTimer = setInterval(callSlide, 5000);

window.addEventListener('resize', callSlide);


let movies = [
    {
        name: 'falcon and the winter soldier',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 2.PNG'
    },
    {
        name: 'loki',
        des: 'Loki revolves around the mischievous villain escaping the clutches of The Avengers and getting caught by the Time Variance Authority. This sends him on a mission to catch the different antagonist who has been troubling the timelines.',
        image: 'images/slider 1.PNG'
    },
    {
        name: 'wanda vision',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 3.PNG'
    },
    {
        name: 'raya and last dragon',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 4.PNG'
    },
    {
        name: 'luca',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 5.PNG'
    }

];
const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; // to track current slide index.
//function 
const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');



    //attach all elements
    {
        // attaching all elements
        imgElement.appendChild(document.createTextNode(''));// empty string for image
        h1.appendChild(document.createTextNode(movies[slideIndex].name));// pass slide index for array movie here
        p.appendChild(document.createTextNode(movies[slideIndex].des));
        content.appendChild(h1);
        content.appendChild(p);
        slide.appendChild(content);
        slide.appendChild(imgElement);
        carousel.appendChild(slide);
    }
    {
        // setting up image
        imgElement.src = movies[slideIndex].image;
        slideIndex++;

        // setting elements classname
        slide.className = 'slider';
        content.className = 'slide-content';
        h1.className = 'movie-title';
        p.className = 'movie-des';

        sliders.push(slide);
    }



   
    // sliders.push(slide);
//But our slider won't work why because we have to shift our first slide to the left. For that add this at the end of the function.
    {
        if (sliders.length) {
            sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
        }
    }
    // negative is because we want negative margin , 100 to we want sliders to go 100 of the screen  , *  we want neagtive 100 for each slide , subrtact 2 from sliders.lenght beacuse we want second slide to be in the middle and we will subtract the margin value from this 100% , we are * 30 
    // as we want 30 pixels on margin on the right .



}

//call this fuction more than one time 
for (let i = 0; i < 3; i++) {
    createSlide();
}
// interval so they do not slide at any time they want the slide after certain interval 
setInterval(() => {
    createSlide();
}, 3000);

//VIDEO CARS SOUND

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

// card sliders when click on button the slide will move

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})
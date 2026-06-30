const images = [
    "images/loading2.jpg",
    "images/loading3.jpg",
    "images/loading4.jpg",
    "images/aboutImage.jpg"
];

const loader = document.getElementById("loader");
const loaderImage = document.getElementById("loaderImage");
const loaderName = document.getElementById("loaderName");

let index = 0;

const slider = setInterval(() => {

    index++;

    if(index < images.length){

        loaderImage.src = images[index];

        // عند الوصول لصورة البروفايل
        if(index === images.length - 1){

            loaderName.classList.add("showName");

            clearInterval(slider);

            setTimeout(() => {

                loader.classList.add("hideLoader");

                setTimeout(() => {
                    loader.remove();
                },1000);

            },5000);

        }

    }

},2000);


// Navbar Scroll Effect


window.addEventListener("scroll", function () {

    let navbar = document.querySelector(".custom-navbar");

    navbar.classList.toggle("scrolled", window.scrollY > 50);

});
// Typing Animation

const words = [

"Banker",

"Department Manager",

"Banking Professional"

];

let wordIndex = 0;

let letterIndex = 0;

let currentWord = "";

let currentLetters = "";

const typing = document.getElementById("typing");

function type(){

if(wordIndex==words.length){

wordIndex=0;

}

currentWord=words[wordIndex];

currentLetters=currentWord.slice(0,++letterIndex);

typing.textContent=currentLetters;

if(currentLetters.length==currentWord.length){

setTimeout(erase,1500);

return;

}

setTimeout(type,120);

}

function erase(){

currentLetters=currentWord.slice(0,--letterIndex);

typing.textContent=currentLetters;

if(letterIndex==0){

wordIndex++;

setTimeout(type,300);

return;

}

setTimeout(erase,70);

}

type();


// Counter Animation

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const update=()=>{

count+=target/100;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

counterObserver.unobserve(counter);

}

})

})

counters.forEach(counter=>{

counterObserver.observe(counter);

});
const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            serviceObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.2
});

serviceCards.forEach((card) => {
    serviceObserver.observe(card);
});
document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(124,58,237,.35),
        #111827 60%)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#111827";

    });

});
/*==========================
Timeline Animation
==========================*/

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

timelineObserver.unobserve(entry.target);

}

})

},{
threshold:.3
});

timelineItems.forEach(item=>{

timelineObserver.observe(item);

});
/*==========================
Back To Top
==========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
const galleryCarousel = new bootstrap.Carousel(
    document.querySelector("#galleryCarousel"),
    {
        interval:10000,
        ride:"carousel",
        wrap:true,
        pause:false
    }
);
const partnerLogos = document.querySelectorAll(".partner-logo");

const partnerObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, index * 150);

            partnerObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.2
});

partnerLogos.forEach((logo) => {
    logo.style.opacity = "0";
    logo.style.transform = "translateY(30px)";
    logo.style.transition = "all .6s ease";
    partnerObserver.observe(logo);
});
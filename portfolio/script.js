window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("fade-out");

    }, 1200);

});

AOS.init({

    duration:1000,

    once:true,

    easing:"ease-in-out"

});

new Typed(".typing",{

    strings:[

        "Python Full Stack Developer",

        "Generative AI Enthusiast",

        "Machine Learning Enthusiast",

        "Open To Work"

    ],

    typeSpeed:70,

    backSpeed:40,

    loop:true

});


window.addEventListener("scroll",()=>{

    let scrollTop=document.documentElement.scrollTop;

    let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    let progress=(scrollTop/scrollHeight)*100;

    document.getElementById("progressBar").style.width=progress+"%";

});

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

const counters=document.querySelectorAll(".counter");

const speed=150;

const startCounter=()=>{

    counters.forEach(counter=>{

        const update=()=>{

            const target=+counter.getAttribute("data-target");

            const count=+counter.innerText;

            const increment=target/speed;

            if(count<target){

                counter.innerText=Math.ceil(count+increment);

                setTimeout(update,15);

            }

            else{

                counter.innerText=target;

            }

        }

        update();

    });

};

const counterSection=document.querySelector(".stats");

if(counterSection){

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startCounter();

            observer.disconnect();

        }

    });

});

observer.observe(counterSection);

}

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

const darkBtn=document.getElementById("darkMode");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});

}

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

console.log("Portfolio Loaded Successfully 🚀");
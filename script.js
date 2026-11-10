window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("fade-out");
    }, 1200);
    }
});


if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-in-out"
    });
}


const typingElement = document.querySelector(".typing");

if (typingElement && typeof Typed !== "undefined") {
    new Typed(".typing", {
        strings: [
            "Python Full Stack Developer",
            "Full Stack Developer",
            "Generative AI Enthusiast",
            "Machine Learning Enthusiast",
            "Frontend Developer",
            "Backend Developer",
            
        ],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1200,
        startDelay: 500,
        loop: true,

    });
}


window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressBar = document.getElementById("progressBar");

    if (progressBar) {
        const progress =
            scrollHeight > 0
                ? (scrollTop / scrollHeight) * 100
                : 0;

        progressBar.style.width = progress + "%";
    }
});


const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topBtn.style.display = "flex";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


const counters = document.querySelectorAll(".counter");
const counterSection = document.querySelector(".stats-section");

if (counterSection && counters.length > 0) {
    let counterStarted = false;

    function startCounter() {
        if (counterStarted) {
            return;
        }

        counterStarted = true;

        counters.forEach(counter => {
            const target = Number(
                counter.getAttribute("data-target")
            );

            let count = 0;

            function updateCounter() {
                const increment = Math.max(
                    1,
                    Math.ceil(target / 80)
                );

                if (count < target) {
                    count += increment;

                    if (count > target) {
                        count = target;
                    }

                    counter.textContent = count;

                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target;
                }
            }

            updateCounter();
        });
    }

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter();
                    observer.disconnect();
                }
            });
        },
        {
            threshold: 0.3
        }
    );

    observer.observe(counterSection);
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const href = this.getAttribute("href");

        if (!href || href === "#") {
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();
    });
}


const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


console.log("Portfolio Loaded Successfully 🚀");
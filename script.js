// =============================
// COUNTER ANIMATION
// =============================

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const updateCounter = () => {

            const count = +counter.innerText;

            const increment = target / 80;

            if (count < target) {

                counter.innerText =
                    Math.ceil(count + increment);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";
            }
        };

        updateCounter();
    });
};

// =============================
// START COUNTERS ON SCROLL
// =============================

const statsSection =
document.querySelector(".stats");

let started = false;

window.addEventListener("scroll", () => {

    if (
        statsSection &&
        window.scrollY >
        statsSection.offsetTop - 500 &&
        !started
    ) {

        startCounters();
        started = true;
    }
});

// =============================
// NAVBAR SHADOW
// =============================

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");
    }
});

// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    });
});

// =============================
// FADE-IN ANIMATION
// =============================

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }
    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
'.card, .hero-card, .portfolio img'
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// =============================
// ACTIVE NAVIGATION
// =============================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");
        }
    });
});

// =============================
// HERO CARD FLOAT EFFECT
// =============================

const heroCard =
document.querySelector(".hero-card");

if(heroCard){

    heroCard.addEventListener("mousemove",
    (e) => {

        const x =
        (window.innerWidth / 2 - e.pageX)
        / 40;

        const y =
        (window.innerHeight / 2 - e.pageY)
        / 40;

        heroCard.style.transform =
        `rotateY(${x}deg)
         rotateX(${-y}deg)`;
    });

    heroCard.addEventListener("mouseleave",
    () => {

        heroCard.style.transform =
        "rotateY(0) rotateX(0)";
    });
}
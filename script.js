/* ==========================================================
   RISX GTI - script.js
========================================================== */

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// Scroll Progress Bar
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";
});

// Fade Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".section,.card,.glass,.step,.stats div")
.forEach(el => {

    el.classList.add("fade");

    observer.observe(el);

});

// Floating Particles
const particles = document.getElementById("particles");

for (let i = 0; i < 60; i++) {

    const particle = document.createElement("span");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (10 + Math.random() * 15) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        Math.random();

    particle.style.width =
        particle.style.height =
        (2 + Math.random() * 4) + "px";

    particles.appendChild(particle);

}

// Counter Animation
const counters = document.querySelectorAll(".stats h2");

const animateCounter = (counter) => {

    const text = counter.innerText;

    const target = parseInt(text);

    if (isNaN(target)) return;

    let count = 0;

    const speed = target / 80;

    const update = () => {

        if (count < target) {

            count += speed;

            counter.innerText = Math.floor(count) + "+";

            requestAnimationFrame(update);

        } else {

            counter.innerText = text;

        }

    };

    update();

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(
                entry.target
            );

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// Navbar Background
window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        nav.style.background =
            "rgba(8,15,35,.85)";

        nav.style.backdropFilter =
            "blur(25px)";

    } else {

        nav.style.background =
            "rgba(255,255,255,.05)";

    }

});

// Card Hover Glow
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(0,229,255,.18),
            rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
            "rgba(255,255,255,.05)";

    });

});

// Mouse Glow Effect
const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
"radial-gradient(circle, rgba(0,229,255,.15), transparent 70%)";
glow.style.filter = "blur(30px)";
glow.style.zIndex = "-1";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = (e.clientX - 125) + "px";
    glow.style.top = (e.clientY - 125) + "px";

});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

console.log(
"%cRISX GTI",
"color:#00E5FF;font-size:28px;font-weight:bold;"
);

console.log(
"%cSecure • Recover • Grow",
"color:#8B5CF6;font-size:16px;"
);
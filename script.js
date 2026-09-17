const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.10
    }
);

sections.forEach((section) => {
    observer.observe(section);
});
const projectCards = document.querySelectorAll(".project-card");

const cardObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show-card");
                }, index * 200);
            }
        });
    },
    {
        threshold: 0.15
    }
);

projectCards.forEach((card) => {
    cardObserver.observe(card);
});
const skillCards = document.querySelectorAll(".skill");

const skillObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show-skill");
                }, index * 100);
            }
        });
    },
    {
        threshold: 0.15
    }
);

skillCards.forEach((skill) => {
    skillObserver.observe(skill);
});
const designImages = document.querySelectorAll(".design-gallery img");

const imageObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show-image");
                }, index * 100);
            }
        });
    },
    {
        threshold: 0.1
    }
);

designImages.forEach((image) => {
    imageObserver.observe(image);
});
/* Scrolling Navigation */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
/* About Highlight Animation */

const aboutHighlights = document.querySelectorAll(".about-highlight");

const highlightObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show-highlight");
                }, index * 150);
            }
        });
    },
    {
        threshold: 0.15
    }
);

aboutHighlights.forEach((highlight) => {
    highlightObserver.observe(highlight);
});
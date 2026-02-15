const toggle = document.getElementById('menu-toggle');

if (toggle) {
    toggle.addEventListener('change', () => {
        document.body.classList.toggle('no-scroll', toggle.checked);
    })
};

const words = ["Student.", "Developer.", "Freelancer.", "Learner.", "Just a boy."];

const typingText = document.getElementById('typing-span');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1)
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        }
        else {
            setTimeout(type, typingDelay);
        }
    }
    else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }
        else {
            setTimeout(type, erasingDelay);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (words?.length) type();
});

const navlinks = document.querySelectorAll('.navlink');
const tabs = document.querySelectorAll('.content');

navlinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        navlinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');

        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if (tab.id === tabName) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        if (tabName === 'services') {
            const servicelist = [
                {
                    id: 1,
                    icon: " ph-code",
                    text: "Website Development",
                    para: "I build simple and clean websites using HTML, CSS, and basic JavaScript for personal use, portfolios, and small projects.",
                },
                {
                    id: 2,
                    icon: "ph-magic-wand",
                    text: "Responsive Web Design",
                    para: "I create websites that work well on mobile, tablet, and desktop devices with a smooth and user-friendly layout.",
                },
                {
                    id: 3,
                    icon: "ph-paint-brush",
                    text: "Basic UI Design",
                    para: "I design clean and simple user interfaces with good layout, colors, and structure for better user experience.",
                },
                {
                    id: 4,
                    icon: " ph-browsers",
                    text: "Simple Website Redesign",
                    para: "I improve old or simple websites by updating layout, design, and structure to make them look fresh and modern.",
                },
                {
                    id: 5,
                    icon: "ph-camera",
                    text: "Photography",
                    para: "I capture simple and creative photos for personal projects, portfolios, and social media use.",
                },
                {
                    id: 6,
                    icon: " ph-laptop",
                    text: "Practice Projects ",
                    para: "I create learning-based projects and demo websites to practice skills and improve real-world experience.",
                },
            ];

            const services = document.getElementsByClassName("service-list");
            const innercontent = servicelist.map((l) => {
                return `
                               <div class="box" key=${l?.id}>
                    <div class="head-icons">
                        <i class="ph ${l?.icon}"></i>
                       <span><i class="ph ph-arrow-down-right"></i></span>
                    </div>
                    <h3>${l?.text}</h3>
                    <span class="spacer"></span>
                    <p>${l?.para}</p>
                </div>
                `;
            }).join("");

            Array.from(services).forEach((ele) => {
                ele.innerHTML = innercontent;
            });
        }

        toggle.checked = false;
    });

});
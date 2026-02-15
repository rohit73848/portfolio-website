const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener('DOMContentLoaded', () => {
    if (aboutTabs) {
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();

        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });

        tab.classList.add("active");

        aboutContent.forEach((c) => {
            c.classList.remove("active")
        });
        const activeTab = (tab.dataset.section);
        document.getElementById(activeTab).classList.add("active");
        if (activeTab === "experience") {
            const experiences = document.querySelector(".experience-list");
            const experienceList = [{
                id: 1,
                date: "2025-Present",
                position: "Student Web Developer",
                company: "Self Learning / Personal Projects",
                details: "Learning web development using HTML, CSS, and basic JavaScript. Building small projects, practice websites, and improving skills through daily learning and hands-on work.",

            }, {
                id: 2,
                date: "2025 – Present",
                position: "Frontend Learner",
                company: "Computer Training Center",
                details: "Learning frontend development fundamentals, responsive design, layouts, and basic UI design through classes and practical projects.",
            }, {
                id: 3,
                date: "2025 - Present",
                position: "Practice Project Developer",
                company: "Personal Portfolio Work",
                details: "Working on personal portfolio projects, demo websites, and student practice projects to gain real-world experience and improve development skills.",
            },
            ];

            const experienceContent = experienceList.map((ele) => {
                return `
                <div class="experience-box" key= ${ele?.id}>
                
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.position}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.company}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                `;
            }).join("");

            if (experiences) {
                experiences.innerHTML = experienceContent;
            }
        } else if (activeTab === "education") {
            const education = document.querySelector(".education-list");
            const educationList = [
                {
                    id: 1,
                    date: "2023 – 2025",
                    degree: "Higher Secondary (Arts Stream)",
                    institution: "WBCHSE Board",
                    details: "Completed Higher Secondary education in Arts stream. Studied subjects like Bengali, English, History, Geography, and Political Science, building strong academic and conceptual foundations."
                },
                {
                    id: 2,
                    date: "2025 – Present",
                    degree: "Web Development Training",
                    institution: "Computer Training Center",
                    details: "Currently learning web development with focus on HTML, CSS, and basic JavaScript. Practicing frontend development, responsive design, and project-based learning."
                },
                {
                    id: 3,
                    date: "2025 – Present",
                    degree: "Self Learning & Online Practice",
                    institution: "Online Platforms / YouTube / Practice Projects",
                    details: "Learning through online tutorials, documentation, and practice projects. Building personal portfolio projects and improving skills through daily self-practice."
                },
            ];

            const educationContent = educationList.map((ele) => {
                return `
                <div class="experience-box" key= ${ele?.id}>
                
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.degree}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.institution}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                `;
            })
                .join("");
            if (education) {
                education.innerHTML = educationContent;
            }

        } else if (activeTab === "skills") {
            const skills = document.querySelector(".skill-list");
            const skillList = [{
                id: 1,
                name: "HTML - Hyper Text Markup Language",
                icon: "assets/skills/html.png",
            }, {
                id: 2,
                name: "CSS - Cascading Style Sheets",
                icon: "assets/skills/css.png",
            }, {
                id: 3,
                name: "JS - Javascript",
                icon: "assets/skills/js.png",
            },
            ];

            const skillContent = skillList.map((ele) => {
                return `
                  <div class="skill-box"
                  kew=${ele?.id}>
                        <img src=${ele?.icon} alt=${ele?.name} title=${ele?.name} loading="lazy" >
                    </div>
                `;
            })
                .join("");

            if (skills) {
                skills.innerHTML = skillContent;
            }
        } else if (activeTab === "about-me") {
            const myInfo = document.querySelector('.my-info');

            const infoList = [
                {
                    id: 1,
                    key: "Name : ",
                    value: "Rahit Biswas",
                },
                {
                    id: 2,
                    key: "Country : ",
                    value: "India 🇮🇳",
                },
                {
                    id: 3,
                    key: "Industry : ",
                    value: "Frontend Development",
                },
                {
                    id: 4,
                    key: "Experience : ",
                    value: "Web Developer (Learning Phase)",
                },
                {
                    id: 5,
                    key: "Address : ",
                    value: "West Bengal, India",
                },
            ];

            const infoContent = infoList.map((ele)=>{
                return `
                <div class="info-box" key=${ele?.id}>
                <span>${ele?.key}</span>
                <span>${ele?.value}</span>
                </div>
                `;
            }) 
            .join("");

            if(myInfo){
                myInfo.innerHTML = infoContent;
            }
        }
    });
});
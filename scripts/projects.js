
const projectList = [{
    id: 1,
    number: "01",
    title: "Amazon Clone",
    description: "Built a responsive Amazon homepage clone using HTML and CSS 🛒. Focused on layout structure, navigation bar, product sections, and clean UI design 🎨. Improved my frontend fundamentals, positioning skills, and responsive layout techniques through this project 💻✨",
    techStack: ["HTML", "CSS"],
    image: "assets/projects/project1.png",
    liveLink: "#",
    githubLink: "#",
}, {
    id: 2,
    number: "02",
    title: "Netflix Clone",
    description: "Built a responsive Netflix landing page clone using HTML and CSS 🎬. Focused on creating a modern hero section, content layout, and clean UI design 🎨. Improved my styling skills, positioning techniques, and understanding of responsive web layouts through this project 💻✨.",
    techStack: ["HTML", "CSS","JavaScript"],
    image: "assets/projects/project2.png",
    liveLink: "#",
    githubLink: "#",
},
]; 

const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderProject = (index) => {

    const projectContent = projectList[index];
    const previousDisabled = currentIndex === 0;
    const nextDisabled = currentIndex === projectList.length - 1;

    projects.innerHTML = `
        <div class="project-info">
                <h3>${projectContent?.number}</h3>
                <h4>${projectContent?.title}</h4>
                <p>${projectContent?.description}</p>
                <div class="tech-stack">
                  ${
                    projectContent?.techStack?.map((tech, i)=>{
                        return `
                        <span>${tech}</span>
                        `;
                    }).join("✦")} 
                </div>
                <hr />
                <div class="links">
                    <a href=${projectContent?.liveLink}><i class="ph ph-arrow-right"></i></a>
                    <a href=${projectContent?.githubLink}><i class="ph ph-github-logo"></i></a>
                </div>
        </div>
         <div class="carousel">
                <img src=${projectContent?.image} alt= ${projectContent?.title}>
                <div class="arrows">
                    <a href="#" id="previous" class= ${previousDisabled? "disabled-btn":""}><i class="ph ph-caret-left"></i></a>
                    <a href="#" id="next" class= ${nextDisabled? "disabled-btn":""}><i class="ph ph-caret-right"></i></a>
                </div>
            </div>
    `

        document.getElementById("previous").addEventListener("click",(e)=>{
            e.preventDefault();

            if(currentIndex > 0){
                currentIndex--;
                renderProject(currentIndex);
            }
        }); 

        document.getElementById("next").addEventListener("click",(e)=>{
            e.preventDefault();

            if(currentIndex < projectList.length -1){
                currentIndex++;
                renderProject(currentIndex);
            }
        });
    }; 

    renderProject(currentIndex);
interface Skill {
    skill: string;
    percent: number;
    offset: number;
}

interface Works {
    name: string;
    description: string;
    githubLink: string;
    skills: { name: string }[];
}

let navbar = document.getElementById("navbar") as HTMLElement;
let navContainer = document.querySelector(`#firstpage nav #navi`) as HTMLDivElement;
let navTab = document.querySelector(`#firstpage nav #navi ul a`) as HTMLAnchorElement;
let hiddenNavbar = document.getElementById("hidden_one") as HTMLElement;
let hoverNavBg = document.getElementById("hover") as HTMLSpanElement;
let activeNavBg = document.getElementById("active") as HTMLSpanElement;

var skillContainer = document.getElementById("skill_container") as HTMLElement;

let navBarHoverIndex: number = 1;
let skillArray: Skill[] = [
    { skill: "Flutter", percent: 85, offset: 105 },
    { skill: "Dart", percent: 75, offset: 105 },
    { skill: "HTML", percent: 70, offset: 210 },
    { skill: "Css", percent: 85, offset: 30 },
    { skill: "Javascript", percent: 65, offset: 30 },
    { skill: "Typescript", percent: 60, offset: 30 },
    { skill: "React", percent: 40, offset: 30 },
]
let workArray: Works[] = [
    { name: "Simon Game", description: "An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion.", skills: [{name: "HTML5"},{name: "CSS3"}, {name: "Java Script"},], githubLink: "" },
]

window.addEventListener("load", () => {
    for (let x = 0; x < skillArray.length; x++) {
        skillContainer.innerHTML += `
            <div class="skill">
              <div class="outer">
                <div class="inner">
                  <div id="number">${skillArray[x].percent}%</div>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="100px">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#000C24;" />
                    <stop offset="100%" stop-color="#928A97" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" stroke-linecap="round" />
              </svg>
              <span class="skillText">${skillArray[x].skill}</span>
            </div>
            `;
    }
    let loading = document.querySelectorAll(`circle`) as NodeListOf<SVGCircleElement>;

    loading.forEach((circle, index) => {

        const keyFrames = document.createElement("style");
        keyFrames.innerHTML = `
            @keyframes anim {
                100% {
                    stroke-dashoffset: ${skillArray[index].offset};
                }
            }

            circle {
                animation: anim 2s linear forwards;
            }
        `;
        circle.appendChild(keyFrames)
    });

    workFunc(0);
})

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 50) {
        navbar.classList.add("sticky");
        hiddenNavbar.style.display = "flex";
        hiddenNavbar.style.width = "45%";
        hiddenNavbar.style.padding = "20px";
        navContainer.style.background = "rgba(0, 12, 36, 0.3)";
        navContainer.style.margin = "20px 0px";
        navContainer.style.borderRadius = "40px";
        navContainer.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.3)";
        navContainer.style.backdropFilter = "blur(20px)";
    } else {
        navbar.classList.remove("sticky");
        hiddenNavbar.style.display = "none";
        navContainer.style.backgroundColor = "";
        navContainer.style.margin = "0px";
        navContainer.style.boxShadow = "";
        navContainer.style.backdropFilter = "";
    }

    // const sections = document.querySelectorAll("section");
    // const navLi = document.querySelectorAll("#firstpage nav #navi ul a");
    // let current: string = "";
    // sections.forEach((section) => {
    //     const sectionTop = section.offsetTop;
    //     const sectionHeight = section.clientHeight;
    //     if (scrollY >= sectionTop - sectionHeight / 3) {
    //         current = section.getAttribute("id")!;
    //     }
    // });

    // navLi.forEach((li, index) => {

    // let selectedTab = document.querySelector(`#firstpage nav #navi ul :nth-child(${index+1})`) as HTMLAnchorElement

    //     li.classList.remove("Navactive");
    //     if (li.classList.contains(current)) {
    //         li.classList.add("Navactive");
    //     }

    // });
});

function onHover(index: number) {
    if (index == 1) {
        hoverNavBg.style.left = "4%"
    }
    else if (index == 2) {
        hoverNavBg.style.left = "23.5%"
    }
    else if (index == 3) {
        hoverNavBg.style.left = "42.5%"
    }
    else if (index == 4) {
        hoverNavBg.style.left = "61.5%"
    }
    else if (index == 5) {
        hoverNavBg.style.left = "80.5%"
    }

    let hoverTab = document.querySelector(`#firstpage nav #navi ul :nth-child(${index})`) as HTMLAnchorElement

    if (navBarHoverIndex == index) {
        console.log("Chee")
        hoverTab.style.color = "red"
    }
}

function onHoverOut(mouseHoverNumber?: number) {
    if (navBarHoverIndex == 1) {
        hoverNavBg.style.left = "5.5%"
    }
    else if (navBarHoverIndex == 2) {
        hoverNavBg.style.left = "25%"
    }
    else if (navBarHoverIndex == 3) {
        hoverNavBg.style.left = "44%"
    }
    else if (navBarHoverIndex == 4) {
        hoverNavBg.style.left = "63%"
    }
    else if (navBarHoverIndex == 5) {
        hoverNavBg.style.left = "82%"
    }
}

function onNavBarClick(index: number) {
    for (let x = 1; x <= 5; x++) {
        let ss = document.querySelector(`#firstpage nav #navi ul :nth-child(${x})`) as HTMLAnchorElement
        ss.style.color = "beige"
        ss.classList.remove("Navactive")
    }

    let selectedTab = document.querySelector(`#firstpage nav #navi ul :nth-child(${index})`) as HTMLAnchorElement
    navBarHoverIndex = index;

    if (index == 1) {
        let element = document.getElementById("firstpage") as HTMLElement;
        element.scrollIntoView({ behavior: "smooth" })

        activeNavBg.style.left = "4%"

        selectedTab.style.color = "#F44336"
    }
    else if (index == 2) {
        let element = document.getElementById("secondpage") as HTMLElement;
    element.scrollIntoView({ behavior: "smooth" })

        activeNavBg.style.left = "23.5%"

        selectedTab.style.color = "#F44336"
    }
    else if (index == 3) {
        let element = document.getElementById("thirdpage") as HTMLElement;
        element.scrollIntoView({ behavior: "smooth" })

        activeNavBg.style.left = "42.5%"

        selectedTab.style.color = "#F44336"
    }
    else if (index == 4) {
        let element = document.getElementById("fourthpage") as HTMLElement;
        element.scrollIntoView({ behavior: "smooth" })

        activeNavBg.style.left = "61.5%"

        selectedTab.style.color = "#F44336"
    }
    else if (index == 5) {
        activeNavBg.style.left = "80.5%"

        selectedTab.style.color = "#F44336"
    }
}

function workFunc(index:number){
    let workName = document.getElementById("work-name") as HTMLHeadingElement
    let workDescription = document.getElementById("work-description") as HTMLParagraphElement
    let workSkillContainer = document.getElementById("work-skills_container") as HTMLParagraphElement

    workName.textContent = workArray[index].name;
    workDescription.textContent = workArray[index].description;
    
    for (let x = 0; x < workArray[index].skills.length; x++) {
        let skill = workArray[index].skills[x].name;
        workSkillContainer.innerHTML += `<div class="work-skills">${skill} </div>`
        
    }
}

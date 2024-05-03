interface Skill {
    skill: string;
    percent: number;
    offset: string;
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
let previousWork = document.getElementById("backButton") as HTMLButtonElement;
let nextWork = document.getElementById("nextButton") as HTMLButtonElement;
let skillContainer = document.getElementById("skill_container") as HTMLElement;

let navBarHoverIndex: number = 1;

let skillArray: Skill[] = [
    { skill: "Flutter", percent: 85, offset: "105" },
    { skill: "Dart", percent: 75, offset: "105" },
    { skill: "HTML", percent: 70, offset: "210" },
    { skill: "Css", percent: 70, offset: "30" },
    { skill: "Javascript", percent: 65, offset: "30" },
    { skill: "Typescript", percent: 60, offset: "30" },
    { skill: "React", percent: 50, offset: "60" },
    { skill: "Figma", percent: 40, offset: "60" },
    { skill: "GitHub", percent: 60, offset: "60" },
]

let workArray: Works[] = [
    { name: "Simon Game", description: "An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion.", skills: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Java Script" },], githubLink: "" },
    { name: "Todo Game", description: "An inquisitive Computering to leverage solid development skills with focus on collaboration, communication and passion.", skills: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Java Script" }, { name: "Flutter" },], githubLink: "" },
    { name: "Todo Game", description: "An inquisitive Computering to leverage solid development skills with focus on collaboration, communication and passion.", skills: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Java Script" }, { name: "Flutter" },], githubLink: "" },
]

let workIndex: number = 0;

window.addEventListener("load", () => {

    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("#firstpage nav #navi ul a");

    window.addEventListener("scroll", () => {
        let current: string = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id")!;
            }
        });

        if (current == "firstpage") {
            activeNavBg.style.left = "3%"
            navBarHoverIndex = 1;
            onHover(1)
            onHoverOut()
        }
        else if (current == "secondpage") {
            activeNavBg.style.left = "22.5%"
            onHover(2)
            navBarHoverIndex = 2;
            onHoverOut()
        }
        else if (current == "thirdpage") {
            activeNavBg.style.left = "42.5%"
            onHover(3)
            navBarHoverIndex = 3;
            onHoverOut()
        }
        else if (current == "fourthpage") {
            activeNavBg.style.left = "61.5%"
            onHover(4)
            navBarHoverIndex = 4;
            onHoverOut()
        }
        else if (current == "fifthpage") {
            activeNavBg.style.left = "80.5%"
            onHover(5)
            navBarHoverIndex = 5;
            onHoverOut()
        }

        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
                li.classList.add("active");
            }

        });
    });

    previousWork.style.display = "none";
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
                <circle cx="50" cy="50" r="45" stroke-linecap="round" class="skillCircle" />
              </svg>
              <span class="skillText">${skillArray[x].skill}</span>
            </div>
            `;

        let loading = document.getElementsByClassName(`skillCircle`) as HTMLCollectionOf<SVGCircleElement>;

        loading[x].style.setProperty('--m', skillArray[x].offset);

    }
    workFunc(workIndex);
});

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 50) {
        navbar.classList.add("sticky");
        hiddenNavbar.style.display = "flex";
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
});

function onHover(index: number) {
    if (index == 1) {
        hoverNavBg.style.left = "3%"
    }
    else if (index == 2) {
        hoverNavBg.style.left = "22.5%"
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

}

function onHoverOut(mouseHoverNumber?: number) {
    if (navBarHoverIndex == 1 || navBarHoverIndex == 0) {
        hoverNavBg.style.left = "4.5%"
    }
    else if (navBarHoverIndex == 2) {
        hoverNavBg.style.left = "24%"
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

    if (index == 1) {
        let element = document.getElementById("firstpage") as HTMLElement;
        element.scrollIntoView({ behavior: "smooth" })


    }
    else if (index == 2) {
        let element = document.getElementById("secondpage") as HTMLElement;
        element.scrollIntoView({ behavior: "smooth" })

    }
    else if (index == 3) {
        let element = document.getElementById("thirdpage") as HTMLElement;
        element.scrollIntoView({ behavior: "smooth" })

    }
    else if (index == 4) {
        let element = document.getElementById("fourthpage") as HTMLElement;
        element.scrollIntoView({ behavior: "smooth" })

    }
    else if (index == 5) {

        let element = document.getElementById("fifthpage") as HTMLElement;
        element.scrollIntoView({ behavior: "smooth" })

    }
}

nextWork.addEventListener("click", () => {
    workIndex += 1
    console.log(workIndex)
    if (workIndex == ((workArray.length) - 1)) {
        nextWork.style.display = "none";
    } else {
        nextWork.style.display = "flex";
    }
    if (workIndex == 0) {
        previousWork.style.display = "none";
    } else {
        previousWork.style.display = "flex";
    }
    if (workIndex < workArray.length) {
        workFunc(workIndex);
    }
})


previousWork.addEventListener("click", () => {
    workIndex--
    if (workIndex == ((workArray.length) - 1)) {
        nextWork.style.display = "none";
    } else {
        nextWork.style.display = "flex";
    }
    if (workIndex == 0) {
        previousWork.style.display = "none";
    } else {
        previousWork.style.display = "flex";
    }
    if (workIndex >= 0) {
        workFunc(workIndex);
    }
})

function workFunc(index: number) {
    let workName = document.getElementById("work-name") as HTMLHeadingElement
    let workDescription = document.getElementById("work-description") as HTMLParagraphElement
    let workSkillContainer = document.getElementById("work-skills_container") as HTMLParagraphElement
    let indicatorContainer = document.getElementById("indicator_container") as HTMLElement;
    let workCount = document.getElementById("work_index") as HTMLElement;


    workCount.textContent = `${index < 9 && "0"}${index + 1}`
    workName.textContent = workArray[index].name;
    workDescription.textContent = workArray[index].description;
    workSkillContainer.innerHTML = "";
    indicatorContainer.innerHTML = "";

    for (let x = 0; x < workArray[index].skills.length; x++) {
        let skill = workArray[index].skills[x].name;
        workSkillContainer.innerHTML += `<div class="work-skills">${skill} </div>`
    }

    for (let x = 0; x < workArray.length; x++) {
        indicatorContainer.innerHTML +=
            `<div class="indicator" id="${index == x && "active"}"></div>`;
    }

}

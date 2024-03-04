interface Skill {
    skill: string;
    percent: number;
    offset: number;
    width: number;
}

var navbar = document.getElementById("navbar") as HTMLElement;
let navContainer = document.querySelector(`#firstpage nav #navi`) as HTMLDivElement;
let navTab = document.querySelector(`#firstpage nav #navi ul a`) as HTMLAnchorElement;
var hiddenNavbar = document.getElementById("hidden_one") as HTMLElement;
let hoverNavBg = document.getElementById("hover") as HTMLSpanElement;
let activeNavBg = document.getElementById("active") as HTMLSpanElement;
var skillContainer = document.getElementById("skill_container") as HTMLElement;

let navBarHoverIndex: number = 1;
let skillArray:Skill[] = [
    {skill: "HTML", percent: 65, offset: 105, width:10},
    {skill: "HTML", percent: 30, offset: 210, width: 5},
    {skill: "HTML", percent: 80, offset: 30, width:2},
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
            
        let loading = document.getElementsByTagName(`circle`) as HTMLCollectionOf<SVGCircleElement>;
        const keyFrames = document.createElement("style");

        keyFrames.innerHTML = `
            @keyframes anim {
                100% {
                    stroke-dashoffset: ${skillArray[x].offset};
                }
            }

            circle {
                animation: anim 2s linear forwards;
            }
        `;
        loading[x].appendChild(keyFrames);
    }
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
    console.log(`${index} ${navBarHoverIndex}`)
    if(navBarHoverIndex == index){
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
         ss.classList.remove("active")
     }
    let selectedTab = document.querySelector(`#firstpage nav #navi ul :nth-child(${index})`) as HTMLAnchorElement
    navBarHoverIndex = index;
    if (index == 1) {
        activeNavBg.style.left = "4%"

        selectedTab.style.color = "#F44336"
    }
    else if (index == 2) {
        activeNavBg.style.left = "23.5%"
        
        selectedTab.style.color = "#F44336"
    }
    else if (index == 3) {
        activeNavBg.style.left = "42.5%"

        selectedTab.style.color = "#F44336"
    }
    else if (index == 4) {
        activeNavBg.style.left = "61.5%"

        selectedTab.style.color = "#F44336"
    }
    else if (index == 5) {
        activeNavBg.style.left = "80.5%"

        selectedTab.style.color = "#F44336"
    }
}

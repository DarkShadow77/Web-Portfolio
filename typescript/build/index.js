"use strict";
var navbar = document.getElementById("navbar");
let navContainer = document.querySelector(`#firstpage nav #navi`);
let navTab = document.querySelector(`#firstpage nav #navi ul a`);
var hiddenNavbar = document.getElementById("hidden_one");
let hoverNavBg = document.getElementById("hover");
let activeNavBg = document.getElementById("active");
let navBarHoverIndex = 1;
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
    }
    else {
        navbar.classList.remove("sticky");
        hiddenNavbar.style.display = "none";
        navContainer.style.backgroundColor = "";
        navContainer.style.margin = "0px";
        navContainer.style.boxShadow = "";
        navContainer.style.backdropFilter = "";
    }
});
function onHover(index) {
    if (index == 1) {
        hoverNavBg.style.left = "4%";
    }
    else if (index == 2) {
        hoverNavBg.style.left = "23.5%";
    }
    else if (index == 3) {
        hoverNavBg.style.left = "42.5%";
    }
    else if (index == 4) {
        hoverNavBg.style.left = "61.5%";
    }
    else if (index == 5) {
        hoverNavBg.style.left = "80.5%";
    }
    let hoverTab = document.querySelector(`#firstpage nav #navi ul :nth-child(${index})`);
    console.log(`${index} ${navBarHoverIndex}`);
    if (navBarHoverIndex == index) {
        console.log("Chee");
        hoverTab.style.color = "red";
    }
}
function onHoverOut(mouseHoverNumber) {
    if (navBarHoverIndex == 1) {
        hoverNavBg.style.left = "5.5%";
    }
    else if (navBarHoverIndex == 2) {
        hoverNavBg.style.left = "25%";
    }
    else if (navBarHoverIndex == 3) {
        hoverNavBg.style.left = "44%";
    }
    else if (navBarHoverIndex == 4) {
        hoverNavBg.style.left = "63%";
    }
    else if (navBarHoverIndex == 5) {
        hoverNavBg.style.left = "82%";
    }
}
function onNavBarClick(index) {
    for (let x = 1; x <= 5; x++) {
        let ss = document.querySelector(`#firstpage nav #navi ul :nth-child(${x})`);
        ss.style.color = "beige";
        ss.classList.remove("active");
    }
    let selectedTab = document.querySelector(`#firstpage nav #navi ul :nth-child(${index})`);
    navBarHoverIndex = index;
    if (index == 1) {
        activeNavBg.style.left = "4%";
        selectedTab.style.color = "#F44336";
    }
    else if (index == 2) {
        activeNavBg.style.left = "23.5%";
        selectedTab.style.color = "#F44336";
    }
    else if (index == 3) {
        activeNavBg.style.left = "42.5%";
        selectedTab.style.color = "#F44336";
    }
    else if (index == 4) {
        activeNavBg.style.left = "61.5%";
        selectedTab.style.color = "#F44336";
    }
    else if (index == 5) {
        activeNavBg.style.left = "80.5%";
        selectedTab.style.color = "#F44336";
    }
}

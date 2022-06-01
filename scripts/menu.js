let burgerBar = document.querySelector(".menu-button-holder")
let burgerBarClose = document.querySelector(".menu-drop-down-close")
let menu = document.querySelector(".menu-dropdown")

burgerBar.addEventListener("click",()=>{
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
    menu.style.transform= "translateY(-10px)"
})
burgerBarClose.addEventListener("click",()=>{
    menu.style.visibility = "hidden";
    menu.style.opacity = "0";
    menu.style.transform= "translateY(15px)"
})
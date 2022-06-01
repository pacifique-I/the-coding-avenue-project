let scrollIndicator =document.querySelector(".scroll-indication")
window.addEventListener("mouseover",(e)=>{
    scrollIndicator.style.top = e.clientY+"px"
    scrollIndicator.style.left = e.clientX+"px"
})
let scrollIndicator =document.querySelector(".scroll-indication")
window.addEventListener("mouseover",(e)=>{
    scrollIndicator.style.top = (e.clientY+5)+"px"
    scrollIndicator.style.left = e.clientX+"px"
})
let upScroller = document.querySelector(".go-up")
let downScroller = document.querySelector(".scroll-indicator")

upScroller.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})

downScroller.addEventListener("click",()=>{
    window.scrollTo({
        top:window.innerHeight,
        left:0,
        behavior:"smooth"
    })
})
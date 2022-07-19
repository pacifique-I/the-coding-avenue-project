let commentHolder = document.querySelector(".comments-wrapper")
let comments = document.querySelectorAll(".comment-wrapper")
let commentSliderRight = document.querySelector(".slide-to-right")
let commentSliderLeft = document.querySelector(".slide-to-left")
let scrollRightSize =0
let scrollLeftSize =0
let leftOffset = 0
let counter=0

comments.forEach(()=>{
    counter+=1
})

counter = (parseInt(counter/3))+1

commentSliderRight.addEventListener("click",()=>{
    if(leftOffset<(counter*350)){
        scrollRightSize += -350
        scrollLeftSize -= 350
        commentHolder.style.left = scrollRightSize+"px"
        leftOffset += 350
    }
})
commentSliderLeft.addEventListener("click",()=>{
    
    if(leftOffset>0){
        scrollLeftSize += 350
        scrollRightSize += 350
        commentHolder.style.left = scrollLeftSize+"px"
        leftOffset -= 350
    }
})
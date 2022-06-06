// DECLARATIONS FOR THE TRUSTED COMPANIES SECTION 
let trustedPage = document.querySelector(".trusted-page")
let trustedContainer = document.querySelector(".trusted-us-wrapper")
trustedPage.style.height = trustedContainer.scrollWidth+"px"









// DECLARATION OF THE HOME SECTIONS 
let title = document.querySelector(".title-hero");
let titleDistanceFromTop = title.offsetTop;

let button = document.querySelector(".button");
let buttonDistanceFromTop = button.offsetTop;










// DECLARALATION OF BENEFITS TITLE 
let BenefitTitle = document.querySelector(".title-hero");
let BenefitTitleDistanceFromTop = BenefitTitle.offsetTop;










// INITIALISATIONS FOR THE TRUSTED ANIMATIONS 
let trustedPageHeight = trustedPage.scrollHeight
let trustedPageDistTop = trustedPage.offsetTop
let screenSize = window.innerWidth
let screenHeight = window.innerHeight
let trustedOffScreenSize = (trustedContainer.scrollWidth)-screenSize
let scrollDistance = (trustedPageDistTop+screenSize)-screenHeight









// ANIMATING TARGETS ON SCROLL 
window.onscroll = function(){










    // ANIMATING THE TRUSTED PAGE 
    let scrollTop = window.pageYOffset - trustedPageDistTop
    if(window.pageYOffset >= trustedPageDistTop && window.pageYOffset <= scrollDistance){
        trustedContainer.style.transform = "translateX(-"+scrollTop+"px)"
        
    }


    
    
    
    
    
    
    
    
    // ANIMATING THE hOme PAGE SCROLLING
    let scrollLocation = this.window.scrollY
    if(scrollLocation*3 >= titleDistanceFromTop){
        title.style.opacity = "1"
        title.style.transform = "skewX(0deg)"
    }else{
        title.style.opacity = "0"
        title.style.transform = "skewX(90deg)"
    }

    if(scrollLocation*3 >= buttonDistanceFromTop){
        button.style.opacity = "1"
        button.style.transform = "translateX(0px)"
    }else{
        button.style.opacity = "0"
        button.style.transform = "translateX(-300px)"
    }
}
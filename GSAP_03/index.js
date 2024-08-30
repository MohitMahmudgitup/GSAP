gsap.from('.class2 h1',{
    transform:"translatex(0%)", 
    scrollTrigger:{
        trigger:".class2",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }

})
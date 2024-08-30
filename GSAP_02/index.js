gsap.from(".class1 .box",{
    scale:0,
    duration:1,
    delay:0.5,
    rotate:360
})
gsap.from(".class2 .box",{
    scale:0,
    duration:1,
    delay:0.5,
    rotate:360,
    scrollTrigger:{
        trigger:".class2 .box",
        scroll:"body",
        markers:true,
        start:"top 60%"
    }
})
gsap.from(".class3 .box",{
    scale:0,
    duration:1,
    delay:0.5,
    rotate:360,
    scrollTrigger:{
        trigger:"class3 .box",
        scroll:"body",
        markers:true,
        // start:"top 60%"

    }

})

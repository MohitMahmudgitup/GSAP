let curser = document.querySelector("#curser")
let main = document.querySelector("#main")
let body = document.querySelector("body")
let image = document.querySelector(".imagebox")
body.addEventListener("mousemove",function(v){
    gsap.to(curser,{
        x:v.x,
        y:v.y,
        ease: "elastic.out(1,0.3)",
    })
})

image.addEventListener("mouseenter",function(v){
    curser.innerHTML = "Image"
    gsap.to(curser,{
        scale:3,
        backgroundColor:"#6494ed41",
        color: "#ffffff"
    })
})
image.addEventListener("mouseleave",function(v){
    curser.innerHTML = ""

    gsap.to(curser,{
        scale:1
    })
})


let textH1 = document.querySelector(".text-h1")
function textFunction(){
    let h1 = document.querySelector("h1")
    let set = h1.textContent.split("")
    let add = ""
    let allset = set.forEach((e,i)=>{
        add += `<span>${e}</span>`
    })
    h1.innerHTML = add
}
textFunction()

let tl = gsap.timeline()


.from("h1 span",{
    y:50,
    duration:.7,
    stagger:.2,
    opacity:0
})
.to("main",{
    y:-1000,
    duration:2,

})
// tl.reverse();



// gsap.from('h1',{
//     opacity:0,
//     duration:1,
//     y:30,
//     delay:1,
//     stagger:.2
// })



// gsap.to(".box1", {
//     x: 1265,
//     duration:2,
//     delay:2,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:2.5,
//     // repeat:-1,
//     // yoyo:true
// });

// gsap.from('.box2',{
//     x:1365,
//     y:200,
//     duration:2,
//     backgroundColor:"#fff",
//     borderRadius:"50%",
//     rotate:360,
//     delay:4,
//     // repeat:-1,
//     // yoyo:-1
// })

// gsap.to(".box2", {
//     x: 500,
//     y: 500,
//     duration:2,
//     delay:1
// });

// console.log("hi")



let tl = gsap.timeline()
tl.from("h1",{
    y:-30,
    opacity:0,
    duration:.77,
    delay:0.5
})
tl.from("li",{
    y:-30,
    opacity:0,
    duration:.30,
    // delay:0.5,
    stagger:.2
})
tl.from("h2",{
    y:30,
    opacity:0,
    duration:.5,
    scale:0.2
    // delay:0.5,
    // stagger:.2
})
// gsap.from("#nav h1", {
//     y:-50,
//     duration:0.25,
//     delay:0.5,
//     opacity:0,
//     stagger:0.25,
// })

// gsap.from("#main h1",{
//     x:-50,
//     delay:1.5,
//     duration:0.25,
//     opacity:0,
//     stagger:0.25,
// })

var tl = gsap.timeline();
tl.from("#nav h1", {
    y:-50,
    duration:0.25,
    delay:0.5,
    opacity:0,
    stagger:0.25,
})
.from("#main h1",{
    x:-50,
    delay:1.5,
    duration:0.25,
    opacity:0,
    stagger:0.25,
})
.from("img", {
	x:700,
	opacity:0,
	stagger:0.7,
	rotate:45,
	y:100
})
.to("#img3",{
	// rotate:180,
    scale:1.3,
	duration:1,
	repeat:4, //repeat:-1, then image will rotate other side, infinity
	yoyo:true // will behave like yoyo -> jayega fir ayega fir jayega
})
.to("#img3",{
	// rotate:180,
    duration:0.5,
    scale:1,
})
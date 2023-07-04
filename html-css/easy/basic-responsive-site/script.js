const themeSwitcher = document.querySelector("#switch");
let themeFlag = 0;

themeSwitcher.addEventListener("click", function () {
  if (themeFlag == 0) {
    document.documentElement.style.setProperty("--primary-color", "#fff");
    document.documentElement.style.setProperty("--secondary-color", "#000");
    document.documentElement.style.setProperty("--font-color", "#fff");
    themeSwitcher.innerHTML = `<i class="ri-contrast-2-fill"></i>`;
    themeFlag = 1;
  } else {
    document.documentElement.style.setProperty("--primary-color", "#FF725E");
    document.documentElement.style.setProperty("--secondary-color", "#fff");
    document.documentElement.style.setProperty("--font-color", "#000");
    themeSwitcher.innerHTML = `<i class="ri-sun-fill"></i>`;
    themeFlag = 0;
  }
});

const timeline = gsap.timeline();
timeline
  .from("#nav h1", {
    y: -50,
    opacity: 0,
    duration: 0.1,
    delay: 0.5,
    stagger: 0.25,
  })
  .from("#nav-links ul li", {
    x: -300,
    opacity: 0,
    duration: 0.25,
    stagger: 0.25,
  })
  .from("#left h1:nth-child(1)", {
    x: -300,
    opacity: 0,
    duration: 0.25,
    stagger: 0.25,
  })
  .from("#left h1:nth-child(2)", {
    x: 900,
    opacity: 0,
    duration: 0.25,
    stagger: 0.25,
  })
  .from("#left p", {
    opacity: 0,
    scale: 0,
    duration: 0.25,
    stagger: 0.25,
  })
  .from("#left button", {
    x: -300,
    opacity: 0,
    duration: 0.25,
    stagger: 0.25,
  })
  .from("#left button span", {
    x: -300,
    opacity: 0,
    duration: 0.25,
    stagger: 0.25,
  })
  .from("#right img", {
    opacity: 0,
    y: 900,
    rotate: 180,
    duration: 0.25,
    // repeat:1, //repeat:-1, then image will rotate other side
    // yoyo:true
  })
  .from("#left h1:nth-child(5)", {
    scale: 3,
    opacity: 0,
    duration: 0.25,
    stagger: 0.25,
  })
  .from("#right img", {
    scaleY: 1.05,
    // opacity: 0,
    duration: 0.5,
    stagger: 0.25,
    repeat:Infinity,
    yoyo:true
  })

const menuIcon = document.querySelector("#nav #menu-icon")
const scrollMenu = document.querySelector("#scroll-menu")
let menuFlag = 0;
menuIcon.addEventListener("click",function(){
    if(menuFlag == 0){
        scrollMenu.style.right = "0%";
        menuIcon.innerHTML = `<i class="ri-close-circle-line"></i>`;
        menuFlag = 1;
    }else{
        scrollMenu.style.right = "-35%";
        menuIcon.innerHTML = `<i id="menu-icon" class="ri-menu-line"></i>`;
        menuFlag = 0;
    }
    
})
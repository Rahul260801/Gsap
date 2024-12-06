gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})
// for page2 it runs already so we use scrolltrigger
gsap.from("#page2 #box",{
    scale:0,
     delay:1,
    duration:2,
    rotate:360,
    scrollTrigger : {
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
})
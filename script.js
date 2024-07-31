var csrBlur = document.querySelector("#csrBlur");
document.addEventListener("mousemove", function (dets) {
    csrBlur.style.left = dets.x - 200 + "px";
    csrBlur.style.top = dets.y - 200 + "px";
})
gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    gap: "60px",
    duration: 3,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -14%",
        scrub: 1
    }
});
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -24%",
        end: "top -70%",
        scrub: 2
    }
});
gsap.from("#about .abtImg,#abtText", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
});

gsap.from(".card", {
    scale: 0.8,
    duration: 0.3,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.to(".imgLeft", {
    opacity: 1,
    x: 170,
    scale: 1.5,
    delay: 2,
    scrollTrigger: {
        trigger: ".imgLeft",
        start: "top 70%",
        end: "top 80%",
        scrub: 9,
    }
});

gsap.to(".imgRight", {
    opacity: 1,
    x: -170,
    scale: 1.5,
    delay: 2,
    scrollTrigger: {
        trigger: ".imgLeft",
        start: "top 70%",
        end: "top 80%",
        scrub: 9,
    }
});

gsap.from("#signUpDiv h4", {
    scale: 0.8,
    duration: 0.4,
    scrollTrigger: {
        trigger: "#signUpDiv",
        start: "top 70%",
        end: "top 80%",
        scrub: 2,
    }
});

gsap.to("#colon1", {
    y: 50,
    x: 50,
    scrollTrigger: {
        trigger: "#colon1",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
});

gsap.to("#colon2", {
    y: -50,
    x: -50,
    scrollTrigger: {
        trigger: "#colon1",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
});

gsap.to("#lustTxt", {
    y: -100,
    scale: 1.3,
    scrollTrigger: {
        trigger: "#lustTxt",
        start: "top 90%",
        end: "top 95%",
        scrub: 4,
        // markers: true
    }
});
 function cursor() {
    var main = document.querySelector("#main")
    var crsr = document.querySelector("#cursor")

    main.addEventListener("mousemove", function (dets) {
        crsr.style.left = dets.x + "px"
        crsr.style.top = dets.y + "px"
    })
}
cursor()


function navEnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-elem h5 span", {
            display: "block",
            duration: 0.2

        })

        tl.to(".nav-elem h5 span", {
            opacity: 1,
            scale: 1,
            ease: "power1.inOut",
            stagger: {
                duration: 1,
                ease: "power2.in",
                amount: 0.5
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()

        tl.to(".nav-elem h5 span", {
            opacity: 0,
            scale: 0,
            ease: "power1.inOut",
            stagger: {
                duration: 1,
                ease: "power1.inout",
                amount: 0.1,
            }
        })

        tl.to(".nav-elem h5 span", {
            display: "none",
            duration: 0.2
        })

        tl.to("#nav-bottom", {
            height: "0vh",
            duration: 0.1
        })

    })
}

navEnimation()

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {

            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 150
            })
        })
    })
}
page2Animation()

function page3VideoAnimation() {
    var page3 = document.querySelector("#page3")
    var video = document.querySelector("video")

    video.addEventListener("mouseenter", function () {
        video.play()
        gsap.to(video, {
            opacity: 1,
            duration: 0.1

        })
    })
    video.addEventListener("mouseleave", function () {
        video.load()
        gsap.to(video, {
            opacity: 0,

        })
    })
}
page3VideoAnimation()

function textAnimationPage1h2() {

    var h2Tag = document.querySelector("#page1 h2")
    var h2TagText = h2Tag.textContent

    var splittedText = h2TagText.split("")
    var halfSpliitedText = splittedText.length / 2

    var cruttle = ""

    splittedText.forEach(function (elem, index) {
        if (halfSpliitedText < index) {
            cruttle += `<span class="TextLeftSide">${elem}</span>`
        } else {
            cruttle += `<span class="TextRightSide">${elem}</span>`
        }
    })

    h2Tag.innerHTML = cruttle


    gsap.from("h2 .TextLeftSide", {
        y: 40,
        duration: 1,
        delay: 0.5,
        stagger: 0.15,
        opacity: 0,
    })

    gsap.from("h2 .TextRightSide", {
        y: 40,
        duration: 1,
        delay: 0.5,
        stagger: -0.15,
        opacity: 0
    })
}
textAnimationPage1h2()


function textAnimationPage1p() {

    var pTag = document.querySelector("#page1 p")
    var pTagText = pTag.textContent

    var splittedText = pTagText.split("")

    var cruttle = ""

    splittedText.forEach(function (elem) {
        cruttle += `<span>${elem}</span>`
    })

    pTag.innerHTML = cruttle

    gsap.from("p", {
        y:30,
        duration:2,
        delay: 1,
        stagger: 1,
        opacity: 0
    })

}

textAnimationPage1p()

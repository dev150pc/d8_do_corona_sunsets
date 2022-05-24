// @ts-nocheck

// Import Swiper
import Swiper, { Navigation, Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Gsap
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import 'swiper/css/effect-fade';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

import SplitText from './splitText';

export const page = function() {
    window.onload = function () {
        initialize()
        window.scrollTo(0, 0)
    }
}

function initialize() {
    const bannerInitial = new Swiper('.banner', {
        modules: [Navigation, Pagination],
        spaceBetween: 0,
        speed: 1000,
        direction: 'horizontal',
        centeredSlides: true,
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiperDrinks = new Swiper('.swiperconbinationDrinks', {
        modules: [Navigation,Pagination],
        spaceBetween: 0,
        speed: 1000,
        direction: 'horizontal',
        centeredSlides: true,
        loop: false,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    modalToggle()
    
    gsapScrollToSlide()
    lemonsParallax()
    parallaxSheets()
    animationBotleClass()
    setupSplits()
    bannerFixed()
    disabledControls()
    animacionBotella()
    animateTitle()
    selectSection()
    setColorCategory()
    toggleFAQ()
    animationFallingFruits()
    mouseSwiper()
    // soundPlay()

    //AOS
    AOS.init();
}
    
function mouseSwiper() {
    var mouseBox = document.querySelector('.mouseBox')
    if(mouseBox) {
        const mouseBoxStyle = mouseBox.style
        const contentSwiper = document.querySelector('.conbinationDrinks')
    
        contentSwiper.addEventListener('mouseover', () => {
            mouseBoxStyle.display = 'block'
        })
        contentSwiper.addEventListener('mouseleave', () => {
            mouseBoxStyle.display = 'none'
        })
        contentSwiper.addEventListener('mousemove', () => {
            mouseBoxStyle.top = parseInt(window.event.clientY - 170) + "px"
            mouseBoxStyle.left = parseInt(window.event.clientX) + "px"
        })
    }
}

function lemonsParallax() {
    gsap.from('.sabores__limon1', {
        scrollTrigger: {
            trigger: '.sabores__limon1',
            scrub: 2,
            id: `lemon1`,
        },
        yPercent: 100,
        ease: 'none'
    })

    gsap.from('.sabores__limon2', {
        scrollTrigger: {
            trigger: '.sabores__limon2',
            scrub: 5,
        },
        yPercent: 200,
        ease: 'none'
    })

    gsap.from('.sabores__limon3', {
        scrollTrigger: {
            trigger: '.sabores__limon3',
            scrub: 2,
        },
        yPercent: 200,
        ease: 'none'
    })

    gsap.from('.sabores__limon4', {
        scrollTrigger: {
            trigger: '.sabores__limon4',
            scrub: 4,
        },
        yPercent: 200,
        ease: 'none'
    })

    gsap.from('.sabores__limon5', {
        scrollTrigger: {
            trigger: '.sabores__limon5',
            scrub: 3,
        },
        yPercent: 200,
        ease: 'none'
    })

    gsap.from('.sabores__limon6', {
        scrollTrigger: {
            trigger: '.sabores__limon6',
            scrub: 5,
        },
        yPercent: 200,
        ease: 'none'
    })

    gsap.from('.sabores__limon7', {
        scrollTrigger: {
            trigger: '.sabores__limon7',
            scrub: 3,
        },
        yPercent: 200,
        ease: 'none'
    })
}

function modalToggle() {
    const openModalButton = document.querySelector('.modal-open');

    if(openModalButton) {
        const idModal = openModalButton.getAttribute('data-modal')
        const modal = document.querySelector(`.modalTrop[data-modal="${idModal}"]`)
        const close = modal.querySelector('.modalTrop-close');
        const videos = modal.querySelectorAll('iframe');
    
        openModalButton.addEventListener('click', function() {
            if (modal) {
                modal.classList.remove('is-close');
            }
        })
    
        if (modal && close) {
            close.addEventListener("click", function () {
                modal.classList.add("is-close");
    
                if (videos) {
                    videos.forEach((video) => {
                        const videoSrc = video.src;
                        video.src = videoSrc
                    })
                }
            })
        }
    }
}



// function soundPlay() {
//     const soundButton = document.querySelector('.soundMessage')
//     const inconSound = soundButton.querySelector('.soundMessage__icon')
//     const audio = soundButton.querySelector('#clicAudio')

//     soundButton.addEventListener('click', function() {
//         if (inconSound.classList.contains('playing')) {
//             inconSound.classList.remove('playing')
//             audio.pause()
//         }
//         else {
//             inconSound.classList.add('playing')
//             audio.play()
//         }
//     })
// }

function bannerFixed() {
    ScrollTrigger.create({
        trigger: '.swiper-container.banner',
        start: "top top", 
        pin: true, 
        pinSpacing: false,
        snap: 1,
    });
}

function parallaxSheets() {
    gsap.from('.sabores__hoja1', {
        scrollTrigger: {
            trigger: '.sabores__hoja1',
            scrub: 3,
            id: 'hoja1'
        },
        yPercent: 70,
        ease: 'none'
    })

    gsap.from('.sabores__hoja2', {
        scrollTrigger: {
            trigger: '.sabores__hoja2',
            scrub: 4,
            id: 'hoja2'
        },
        yPercent: 70,
        ease: 'none'
    })

    gsap.from('.sabores__hoja3', {
        scrollTrigger: {
            trigger: '.sabores__hoja3',
            scrub: 3,
            id: 'hoja1'
        },
        yPercent: 70,
        ease: 'none'
    })

    gsap.from('.sabores__hoja4', {
        scrollTrigger: {
            trigger: '.sabores__hoja4',
            scrub: 4,
            id: 'hoja2'
        },
        yPercent: 70,
        ease: 'none'
    })

    gsap.from(".discoverFlavors--leaf", {
        scrollTrigger: {
            trigger: '.discoverFlavors--leaf',
            scrub: 3,
            id: 'hoja3'
        },
        yPercent: 50,
        ease: 'none'
    })

    gsap.to(".compra__hoja1", {
        scrollTrigger: {
            trigger: '.compra__hoja1',
            scrub: 1,
            id: 'hoja1',
        },
        yPercent: -50,
        ease: 'none'
    })

    gsap.to(".tips__hoja1", {
        scrollTrigger: {
            trigger: '.tips__hoja1',
            scrub: 1,
            id: 'hoja1',
        },
        yPercent: -50,
        ease: 'none'
    })
}

function animationBotleClass() {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".discoverFlavors__body--bottle", {
        scrollTrigger: {
            trigger: '.discoverFlavors__body',
            start: 'top 60%',
            end: 'top center',
            toggleActions: "restart resume resume reverse",
            scrub: true,
            id: 'bottle'
        },
        y: 380,
        ease: 'none'
    });
}

function animacionBotella(section, index) {
    gsap.registerPlugin(ScrollTrigger)

    function setBackgrounP() {
        const body = document.body.clientWidth
        let position
        
        if (body < 481) {
            position = 62.22
            return position
        }

        else if (body < 992) {
            position = 75.05
            return position
        }

        else if (body < 1101) {
            position = 85.1
            return position
        }

        else if (body < 1368) {
            position = 91.61
            return position
        }

        else {
            position = 102.5
            return position
        }
    }
    
    if (section) {
        const bottle = section.querySelector('.image__botella')
        var frame_count  = 9,
        offset_value = 50;

        if (index == 0) {
            gsap.to(bottle, {
                backgroundPosition: (-setBackgrounP() * frame_count * 2) + "px 50%",
                ease: "steps(" + frame_count + ")",
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    end: "+=" + (frame_count * offset_value),
                    scrub: true
                }
            });
        }

        else {
            gsap.to(bottle, {
                backgroundPosition: (-setBackgrounP() * frame_count * 2) + "px 50%",
                ease: `steps(${frame_count})`,
                scrollTrigger: {
                    trigger: section,
                    start: `top center`,
                    end: 'center top',
                    scrub: true,
                    // markers: true,
                    id: `botella${index+1}`
                }
            });
        }
    }
}

function percentage() {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    let percentage

    if (windowWidth < 380 && windowHeight < 670) {
        percentage = '0%'   
        return percentage
    }

    else if (windowHeight < 670) {
        percentage = '3%'
        return percentage
    }

    else if (windowWidth < 992 && windowHeight < 850) {
        percentage = '5%'
        return percentage
    }

    else {
        percentage = '19%'
        return percentage
    }
}

function gsapScrollToSlide() {
    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray(".saboresSwiper__slide").forEach((section, i) => {
        var parts = 3
        var fruta = section.querySelector('.image__frutas')
        var fondo = section.querySelector('.image__fondo')
        var pointText = section.querySelector('.points__text')
        var pointImage = section.querySelectorAll('.points__image')

        new SplitText(`.slide${i+1} .text__title-h2`)
        new SplitText(`.slide${i+1} .text__parag-1`)
        new SplitText(`.slide${i+1} .text__parag-2`)

        if (i == 0) {
            gsap.to(section, {
                ease: `steps(${parts})`,
                scrollTrigger: {
                    trigger: section,
                    start: 'center center',
                    end: `bottom ${percentage()}`,
                    id: `slide${i+1}`,
                    // markers: true,
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    onLeave: () => {
                        section.classList.add('opacity')
                    },
                    onEnterBack: () => {
                        section.classList.remove('opacity')
                    }
                },
            })
    
            gsap.from(fruta, {
                scale: 0,
                y: -200,
                x: -100,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top center',
                    end: 'top top',
                    scrub: true,
                    id: 'fruta',
                    toggleActions: "restart none none none"
                },
            })
    
            gsap.from(fondo, {
                scale: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top center',
                    end: 'top top',
                    scrub: true,
                    toggleActions: "restart none none none"
                },
            })
            
            gsap.from(pointText, {
                scale: 0,
                x: 200,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top center',
                    end: 'top top',
                    scrub: true,
                    toggleActions: "restart none none none"
                },
            })
            
            gsap.from(pointImage, {
                scale: 0,
                x: 200,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top center',
                    end: 'top top',
                    scrub: true,
                    toggleActions: "restart none none none"
                },
            })

            animacionBotella(section, i)
        }

        else if (i == 3) {
            gsap.to(section, {
                ease: `steps(${parts})`,
                scrollTrigger: {
                    trigger: section,
                    start: `top ${percentage()}`,
                    end: `bottom ${percentage()}`,
                    id: `slide${i}`,
                    // markers: true,
                    pin: true,
                    pinSpacing: true,
                    scrub: true,
                    onEnter: () => {
                        document.querySelector(`.slide${i+1}`).style.opacity = 1
                    },
                    onEnterBack: () => {
                        document.querySelector(`.slide${i+1}`).style.opacity = 1
                    },
                    onLeaveBack: () => {
                        document.querySelector(`.slide${i+1}`).style.opacity = 0
                    }
                },
            })

            gsap.from(fruta, {
                scale: 0.5,
                x: -150,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top center',
                    end: 'bottom top',
                    scrub: true,
                    id: 'fruta',
                    toggleActions: "restart none none none"
                },
            })

            animacionBotella(section, i)
        }

        else {
            section.style.padding = '0 0 500px'
            gsap.to(section, {
                ease: `steps(${parts})`,
                scrollTrigger: {
                    trigger: section,
                    start: `top ${percentage()}`,
                    end: `bottom ${percentage()}`,
                    id: `slide${i+1}`,
                    // markers: true,
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    onEnter: () => {
                        document.querySelector(`.slide${i+1}`).style.opacity = 1
                    },
                    onLeave: () => {
                        document.querySelector(`.slide${i+1}`).style.opacity = 0
                    },
                    onEnterBack: () => {
                        document.querySelector(`.slide${i+1}`).style.opacity = 1
                    },
                    onLeaveBack: () => {
                        document.querySelector(`.slide${i+1}`).style.opacity = 0
                    }
                },
            })

            gsap.fromTo(fruta, {
                scale: 0.5,
                x: -150,
                ease: 'none',
                duration: 5,
                scrollTrigger: {
                    trigger: section,
                    start: 'top center',
                    end: 'center top',
                    scrub: true,
                    id: 'fruta',
                    toggleActions: "restart none none none"
                },
            }, {
                scale: 1,
                x: 0,
                ease: 'none',
                duration: 5,
                scrollTrigger: {
                    trigger: section,
                    start: 'top center',
                    end: 'center top',
                    scrub: true,
                    id: 'fruta',
                    toggleActions: "restart none none none"
                },
            })

            animacionBotella(section, i)
        }
    })
}

function animateTitle() {
    gsap.registerPlugin(ScrollTrigger)
    const windowWindth = document.body.clientWidth

    gsap.fromTo(".textoBig__h1", {
        scrollTrigger: {
            trigger: '.textoBig__h1',
            start: 'center 100%',
            end: 'center 10%',
            scrub: 1,
        },
        x: (windowWindth - 50),
        ease: 'none'
    }, 
    {
        scrollTrigger: {
            trigger: '.textoBig__h1',
            start: 'center 100%',
            end: 'center 10%',
            scrub: 1,
        },
        x: -(windowWindth + 570),
        ease: 'none'
    });
}

function selectSection() {
    const block = document.querySelector('.parts')
    const sections = block.querySelectorAll('.section')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id")
            const sectionSelected = block.querySelector(`.section[href="#${id}"]`)

            if (entry.isIntersecting) {
                sectionSelected.classList.add('active')
            }
            else {
                sectionSelected.classList.remove('active')
            }
        })
    }, {rootMargin: '-50% 0px -50% 0px'})

    sections.forEach((section) => {
        const hash = section.getAttribute('href')
        const target = document.querySelector(hash)
        if (target) {
            observer.observe(target)
        }
    })
}

function setColorCategory() {
    const categories = document.querySelectorAll('.sabores__category-box')

    categories.forEach((category) => {
        const indexCategory = category.getAttribute('data-category')
        const slide = document.getElementById(`slide3`)
        let scrollTo

        category.addEventListener('click', function() {
            const categoryActive = document.querySelector('.sabores__category-box.active')

            if (categoryActive) {
                categoryActive.classList.remove('active')
            }
            category.classList.add('active')
            
            if (indexCategory == 1) {
                function scrollSlide1 () {
                    var scrollSlide1
                    if (window.innerWidth < 1050) {
                        scrollSlide1 = 1300
                        return scrollSlide1
                    }
                    else {
                        scrollSlide1 = 1500
                        return scrollSlide1
                    }
                }
                scrollTo = scrollSlide1()
                console.log('slide1', scrollTo)
                window.scrollTo({
                    left: 0,
                    top: scrollTo,
                    behavior: 'smooth'
                })
            }

            else if (indexCategory == 2) {
                function scrollSlide2 () {
                    var scrollSlide2
                    if (window.innerWidth < 992) {
                        scrollSlide2 = 2500
                        return scrollSlide2
                    }
                    else if (window.innerWidth < 1350) {
                        scrollSlide2 = 2100
                        return scrollSlide2
                    }
                    else {
                        scrollSlide2 = 2500
                        return scrollSlide2
                    }
                }
                scrollTo = scrollSlide2()
                console.log('slide2', scrollTo)
                window.scrollTo({
                    left: 0,
                    top: scrollTo,
                    behavior: 'smooth'
                })
            }

            else if (indexCategory == 3) {
                function scrollSlide3 () {
                    var scrollSlide3
                    if (window.innerWidth < 992) {
                        scrollSlide3 = 2500
                        return scrollSlide3
                    }
                    else if (window.innerWidth < 1350) {
                        scrollSlide3 = 2200
                        return scrollSlide3
                    }
                    else {
                        scrollSlide3 = 2500
                        return scrollSlide3
                    }
                }
                scrollTo = scrollSlide3() + slide.clientHeight
                console.log('slide3', scrollTo)
                window.scrollTo({
                    left: 0,
                    top: scrollTo,
                    behavior: 'smooth'
                })
            }

            else {
                function scrollSlide4 () {
                    var scrollSlide4
                    if (window.innerWidth < 992) {
                        scrollSlide4 = 1060
                        return scrollSlide4
                    }
                    else if (window.innerWidth < 1050) {
                        scrollSlide4 = 260
                        return scrollSlide4
                    }
                    else if (window.innerWidth < 1350) {
                        scrollSlide4 = 460
                        return scrollSlide4
                    }
                    else if (window.innerWidth < 1530) {
                        scrollSlide4 = 660
                        return scrollSlide4
                    }
                    else {
                        scrollSlide4 = 860
                        return scrollSlide4
                    }
                }
                scrollTo = 2500 + slide.clientHeight + scrollSlide4()
                console.log('slide4', scrollTo)
                window.scrollTo({
                    left: 0,
                    top: scrollTo,
                    behavior: 'smooth'
                })
            }
        })
    })
}

function toggleFAQ() {
    const questions = document.querySelectorAll('.block')
    
    questions.forEach(element => {
        const btn = element.querySelector('.block__question')

        if (btn) {
            btn.addEventListener('click', function () {
                questions.forEach(i => i.classList.remove('active'))
                element.classList.add('active')
            })
        }
    })
}

function disabledControls() {
    const swipers = document.querySelectorAll('.swiper-container')

    swipers.forEach((swiper) => {
        const slides = swiper.querySelectorAll('.swiper-slide')
        const buttonPrev = swiper.querySelector('.swiper-button-prev')
        const buttonNext = swiper.querySelector('.swiper-button-next')
        const pagination = swiper.querySelector('.swiper-pagination')

        if (slides.length <= 1) {
            if (buttonPrev) {
                buttonPrev.style.display = "none"
                buttonNext.style.display = "none"
            }
            
            if (pagination) {
                pagination.style.display = "none"
            }
        }
    })
}

function animationFallingFruits() {
    const boxAnimate = document.querySelector('.boxAnimation')
    let boxAnimateWidth

    new SplitText('.introduction__h2')
    new SplitText('.introduction__h1')
    if (boxAnimate) {
        boxAnimateWidth = boxAnimate.clientWidth
    }
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".boxAnimation__img", {
        scrollTrigger: {
            trigger: ".boxAnimation__img",
            start: "top 70%",
            end: "100px 60%",
            scrub: 1,
        },
        x: -((boxAnimateWidth/2)-130),
        y: -130,
        rotation: 120,
        duration: 3,
        // scale: setScale()
    })

    gsap.from('.bebida1', {
        y: 435,
        x: -100,
        rotate: -150,
        scrollTrigger: {
            trigger: '.bebida1',
            start: 'center 70%',
            end: 'center 10%',
            scrub: 1,
            id: 'bebida1'
        },
    })

    gsap.from('.bebida2', {
        y: 415,
        x: -115,
        rotate: -150,
        ease: 'none',
        scrollTrigger: {
            trigger: '.bebida2',
            start: 'center 70%',
            end: 'center 10%',
            scrub: 1,
            id: 'bebida2'
        },
    })

    gsap.from('.bebida3', {
        y: 415,
        x: -115,
        rotate: -170,
        ease: 'none',
        scrollTrigger: {
            trigger: '.bebida3',
            start: 'center 70%',
            end: 'center 10%',
            scrub: 1,
            id: 'bebida3'
        },
    })

    gsap.from('.gota1', {
        y: 200,
        x: 20,
        ease: 'none',
        scrollTrigger: {
            trigger: '.gota1',
            start: 'bottom 40%',
            end: 'bottom top',
            scrub: 1,
            id: 'gota1'
        },
    })

    gsap.from('.gota2', {
        y: 100,
        x: -70,
        ease: 'none',
        scrollTrigger: {
            trigger: '.gota2',
            start: 'bottom 40%',
            end: 'bottom top',
            scrub: 1,
            id: 'gota2'
        },
    })

    gsap.from('.boxAnimation__vaso-fondo', {
        scaleY: 0,
        bottom: -60,
        ease: 'none',
        scrollTrigger: {
            trigger: '.boxAnimation__vaso',
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
            id: 'vaso-fondo'
        },
    })

    function translateStep () {
        const windowWindth = document.body.clientWidth
        let translate

        if (windowWindth < 991) {
            translate = -500
            return translate
        }

        else {
            translate = 500
            return translate
        }
    }

    gsap.from('.steps__step1', {
        x: translateStep(),
        duration: 3,
        ease: 'none',
        scrollTrigger: {
            trigger: '.steps__step1',
            end: 'bottom 70%',
            scrub: 1,
            id: 'step1'
        },
    })

    gsap.from('.steps__step2', {
        x: translateStep(),
        duration: 3,
        ease: 'none',
        scrollTrigger: {
            trigger: '.steps__step2',
            end: 'bottom 70%',
            scrub: 1,
            id: 'step1'
        },
    })

    gsap.from('.steps__step3', {
        x: translateStep(),
        duration: 3,
        ease: 'none',
        scrollTrigger: {
            trigger: '.steps__step3',
            end: 'bottom 70%',
            scrub: 1,
            id: 'step1'
        },
    })
}

function setupSplits() {
    new SplitText('.banner__text-h1')
    new SplitText('.banner__text-h3')
    new SplitText('.sabores__title-h1')
    new SplitText('.steps__step1-text')
    new SplitText('.steps__step2-text')
    new SplitText('.steps__step3-text')
    new SplitText('.descConbination--title')
    new SplitText('.descConbination--subtitle')
    new SplitText('.descConbination--subtitle-2')
    new SplitText('.discoverFlavors__top--title')
    new SplitText('.discoverFlavors__top--subtitle')
    new SplitText('.discoverFlavors__top--subtitle-2')
    new SplitText('.discoverFlavors__bottom--boxCopy--copy')
    new SplitText('.containerFaq__title')
    new SplitText('.block__question-text-nb')
    new SplitText('.block__question-text-qs')
    new SplitText('.block__answer')
    new SplitText('.shop__texto-h2')
    new SplitText('.shop__texto-22')
}

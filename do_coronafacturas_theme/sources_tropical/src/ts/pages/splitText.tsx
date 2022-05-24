// @ts-nocheck
/*** SPLIT TEXT ***/

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class SplitText {
    elementId: string;
    wordList: Array<string>;
    splitMarkup: Array<string>;
    refHTMLElement: HTMLElement;

    constructor(elementId: string) {
        this.elementId = elementId;
        this.refHTMLElement = document.querySelector(elementId)
        if (this.refHTMLElement) this.splitText()
    }

    splitText(): void {
        this.refHTMLElement.classList.add('split-text')
        this.wordList = this.refHTMLElement.innerText.split(' ')
        this.updatedMarkup()
    }
    
    updatedMarkup(): void {
        this.splitMarkup = this.wordList.map(word => `<span><span class="inner">${word.trim()} </span></span>`)
        this.setNewContent()
    }

    setNewContent(): void {
        this.refHTMLElement.innerHTML = ''
        this.refHTMLElement.innerHTML = this.splitMarkup.join("")
        this.animateText()
    }
    
    animateText(): void {
        gsap.registerPlugin(ScrollTrigger)

        this.refHTMLElement.classList.remove("hide")
        gsap.to(`${this.elementId} span.inner`, {
            duration: 1,
            translateY: 0,
            opacity: 1, 
            stagger: .1, 
            ease: "power.out",
            scrollTrigger: {
                trigger: this.elementId,
                toggleActions: "restart resume resume resume",
                start: "top bottom",
                // markers: true
            },
        })
    }
}
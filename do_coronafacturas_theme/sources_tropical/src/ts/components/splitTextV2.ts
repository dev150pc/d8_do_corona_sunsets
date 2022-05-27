// @ts-nocheck
/*** SPLIT TEXT ***/

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// matchLetter = 'a-zA-Z0-9À-ÿ\u00f1\u00d1'
// matchSigns = '.,\/#!¡$%\\*;:\-`()”“"…'
// matchHTMLTags = '<.*?>'

export default class SplitTextV2 {
    selector: string;
    refHTMLElements: NodeListOf<any>;
    prefix: string = "cct"; // Cambiar prefijo dependiendo del proyecto

    constructor(selector: string) {
        this.selector = selector;
        this.refHTMLElements = document.querySelectorAll(selector)
        if (this.refHTMLElements && this.refHTMLElements.length > 0) this.splitText()
    }

    splitText(): void {
        this.refHTMLElements.forEach(element => {
            element.classList.add(`${this.prefix}-split-text`)
            element.classList.add(`${this.prefix}-split-text--hide`)

            let nwMarkup = element.innerHTML.replace(/([a-zA-Z0-9À-ÿ\u00f1\u00d1.,\/#!¡$%\\*;:\-`()”“"…]+)(\s*?)|(<.*?>)/g, (t1) => {
                if (t1.match(/<.*?>/g)) return t1;
                return `<span><span class="inner">${t1}</span></span>`
            })
            this.setNewContent(element, nwMarkup)
        })
    }

    setNewContent(element: any, paragraph: string): void {
        element.innerHTML = ''
        element.insertAdjacentHTML('beforeend', paragraph)
        this.animateText(element)
    }

    animateText(element: any): void {
        element.classList.remove(`${this.prefix}-split-text--hide`)
        let refInnerSpan = element.querySelectorAll('span.inner')
        gsap.to(refInnerSpan, {
            scrollTrigger: {
                trigger: element,
                toggleActions: "restart resume resume resume",
            },
            duration: .8,
            translateY: 0,
            opacity: 1,
            stagger: .1,
            ease: "power.out"
        })
    }
}
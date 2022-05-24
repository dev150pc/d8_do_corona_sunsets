// import dama from "/modules/dama.js";
// import apiDrupal from "./api.js";
// const dm = new dama();


// const api = new apiDrupal();
export const page = async () => {
    /* ON LOAD */
    console.log('Dama: Desarrollado por 150%')
    
    const cardSticky = document.querySelector('.ca-sticky')
    if (cardSticky) {
        const closeCard = cardSticky.querySelector('.ca-sticky__close')
        closeCard.addEventListener('click', function () {
            cardSticky.classList.add('close')
        })
    }
}
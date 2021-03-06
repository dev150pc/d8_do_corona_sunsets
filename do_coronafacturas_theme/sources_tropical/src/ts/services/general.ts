// import dama from "/modules/dama.js";
// import apiDrupal from "./api.js";
// const dm = new dama();
import Bouncer from "formbouncerjs";
import { emails } from "./emails";


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

    validateForm()
    scrollTo()
}

const scrollTo = () => {
  window.location.hash
  if(!window.location.hash) return

  const anchor = document.createElement("a");
  anchor.setAttribute("href", window.location.hash);
  anchor.setAttribute("class", "hidden");
  anchor.click();
}

const validateForm = () => {
  if (!document.querySelector('form')) return
  console.log('Dama: Validando formularios')

  const bouncer = Bouncer("form", {
    patterns: {
      email:
        /^[a-z0-9!#$%&'*/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    },
    customValidations: {
      name: function (field: any) {
        if (field.name == "nombre") {
          const value = field.value;
          if (!value.match(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]*$/g)) {
            return true;
          }
        }
      },
      lastname: function (field: any) {
        if (field.name == "apellido") {
          const value = field.value;
          if (!value.match(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]*$/g)) {
            return true;
          }
        }
      },
      phone: function (field: any) {
        if (field.name == "celular") {
          const value = field.value;
          if (value.length !== 10) {
            return true;
          }
        }
      },
      dni: function (field: any) {
        if (field.name == "cedula") {
          const value = field.value;
          if (!value.match(/^[0-9]+$/)) {
            return true;
          }
          if (value.length < 7 || value.length > 11) {
            return true;
          }
        }
      },

      emailVerified: function (field: any) {
        let array_email = field.value.split("@");
        const res = emails.find((m: any) => m === array_email[1]);
        return res === undefined ? false : true;
      },
    },
    messages: {
      missingValue: {
        checkbox: "Debe aceptar Términos y condiciones y Políticas de privacidad.",
        default: "Este campo es obligatorio",
      },
      // agegate:"Debes ser mayor de edad",

      privacy: "Debe aceptar políticas de privacidad.",
      terms: "Debe aceptar términos y condiciones.",
      emailVerified: "Por favor ingrese un email válido",
      name: "No se permiten números o caracteres especiales",
      lastname: "No se permiten números o caracteres especiales",
      nameYlastname: "No se permiten números",
      phone: "Teléfono debe tener entre 10  dígitos, ni más ni menos",
      dni: "El documento debe tener entre 7 a 11 dígitos",
      zip: "Debe tener 5 dígitos ",
      patternMismatch: {
        email: "Por favor ingrese un email válido",
      },
    },
  });
};

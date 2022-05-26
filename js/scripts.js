/* VALOR DEL TICKET */

var tktPrice = 200;

/* DESCUENTOS SEGUN CATEGORIAS */

var dtoStudent = 0.80; /* Esto es un 80% */
var dtoTrainee = 0.50; /* Esto es un 50% */
var dtoJunior = 0.15; /* Esto es un 15% */


/* VARIABLES DEL FORM */

var nombre          = document.getElementById ("firstName");
var apellido        = document.getElementById ("lastName");
var email           = document.getElementById ("email1");
var cantEntradas    = document.getElementById ("cantEntradas");
var categoria       = document.getElementById ("categElegida");


/* PARA QUE FIGUREN LOS ERRORES AL PONER SUBMIT, SI NO FUE COMPLETADO O UN CAMPO NO CORRESPONDE SU CONTENIDO */
(function () {
    'use strict'
  
    /* TOMA TODOS LOS FORMS QUE LLEVARAN FORMATO DE INVALIDO */
    var forms = document.querySelectorAll('.needs-validation')
  
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()



  /* HACE CALCULO DE VALOR TOTAL x CANT TICKETS CON SU CORRESPONDIENTE DESCUENTO */

  function montoTotalPagar(){
    let totalValorTkt = (cantEntradas.value) * tktPrice;

    if (categoria.value == 0) { 
      totalValorTkt = totalValorTkt;
    }

    if (categoria.value == 1) {
      totalValorTkt = totalValorTkt * ((1-dtoStudent)).toFixed(2); /* NOTA: Coloque toFixed porque sino por algun motivo el valor total daba 39.999999 */ 
    }

   

    if (categoria.value == 2) {
      totalValorTkt = totalValorTkt * (1-dtoTrainee);
    }
    
    if (categoria.value == 3) {
      totalValorTkt = totalValorTkt * (1-dtoJunior);
    }

    totalPagar.innerHTML = totalValorTkt;

  }


btnSubmitForm.addEventListener ('click', montoTotalPagar);

function clearForm (){

  totalPagar.innerHTML = "";
  document. getElementById("form_tkts_comp"). className = "needs-validation"
}



btnBorraForm.addEventListener ('click', clearForm);

import validator from './validator.js';

console.log(validator);

let despensa = document.getElementById("despensa");
let aseo = document.getElementById("aseo");
let lacteos = document.getElementById("lacteos");
//para cambiar al formulario 
function comprarT() {
  document.getElementById("categorias").classList.add("oculta");
  document.getElementById("contenedor_formulario").classList.remove("oculta");
}
// evento para llamar al formulario 
despensa.addEventListener("click", comprarT, false);
aseo.addEventListener("click", comprarT, false);
lacteos.addEventListener("click", comprarT, false);

// para validar la tarjeta con lo que ingrese el cliente
let numeroIngresado = document.getElementById("numeroTarjeta");

// funcion para que el cliente ingrese el numero de tarjeta
function obtenerNumeroIngresado() {
  document.getElementById("contenedor_formulario").classList.add("oculta");
  document.getElementById("botonValidarT").remove("oculta");
  
  return numeroIngresado.value;
}

document.getElementById("botonValidarT").addEventListener("click",
  function resultado() {

  let numeroTC = obtenerNumeroIngresado();
  let tarjetaValida = validator.isValid(numeroTC);
  let resultado = document.getElementById("resultadoTarjeta")
  let maski = validator.maskify(numeroTC)
    if (validator.isValid(numeroTC) === true) {
    // confirm("tarjeta valida")
  let tarjetaV = document.getElementById("numeroTarjeta").value;
  let mostrartarjeta = tarjetaV.maski
  let gracias1 = " ¡Gracias por tu compra! Tarjeta Valida" 
  //let nombre2 = document.getElementById("numeroTarjeta").innerHTML = mostrartarjeta;
  let saludoFinal1 = gracias1 + maski;
  document.getElementById("name").innerHTML = saludoFinal1 
    }
    else {
      let tarjetaV2 = document.getElementById("numeroTarjeta").value;
      let mostrartarjeta2 = tarjetaV2
      let gracias2 = "Tarjeta Invalida"  
      let saludoFinal2 =  gracias2 + maski;
      document.getElementById("name").innerHTML = saludoFinal2

    }
  });

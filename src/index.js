import validator from './validator.js';

console.log(validator);

var despensa = document.getElementById("despensa");
var aseo = document.getElementById("aseo");
var lacteos = document.getElementById("lacteos");
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
var numeroIngresado = document.getElementById("numeroTarjeta");

// funcion para que el cliente ingrese el numero de tarjeta
function obtenerNumeroIngresado() {
  document.getElementById("contenedor_formulario").classList.add("oculta");
  document.getElementById("botonValidarT").remove("oculta");
  var Nombre = document.getElementById("nombre").value;
  var mostrarNombre = Nombre
  var gracias = "¡Gracias por tu compra!, ";
  var nombre1 = document.getElementById("name").innerHTML = mostrarNombre;
  var saludoFinal = gracias.concat(nombre1);
  document.getElementById("name").innerHTML = saludoFinal
  return numeroIngresado.value;
}


// funcion para validar el numero de tarjeta ingresado por el cliente

function evaluarTarjeta (numero1){
  var numeroTarjetaCredito = obtenerNumeroIngresado(numero1);
  var maskifyoculta = numeroTarjetaCredito.maskify(numero1)
if (evaluarTarjeta === false) {

}else alert('invalido')

    //confirm('tarjeta Invalida' + validator.maskify(numeroTarjetaCredito))
  
  }


/*let resultadovalidacion =  validator.isvalid(numerodeti);
    let stringmaskif =  validator.maskify(numerodeti);
   if (resultadovalidacion === false){
*/
import validator from './validator.js';

console.log(validator);

// para validar la tarjeta con lo que ingrese el cliente

var numeroIngresado = document.getElementById("numeroTarjeta");


// funcion para que el cliente ingrese el numero de tarjeta
function obtenerNumeroIngresado() {
  return numeroIngresado.value;
}

 

// funcion para validar el numero de tarjeta ingresado por el cliente

document.getElementById("botonValidarT").addEventListener(
    "click",
    function () {
      var numeroTarjetaCredito = obtenerNumeroIngresado();
      var tarjetaValida = validator.validarTarjeta(numeroTarjetaCredito);
      if (tarjetaValida){ 
      var validarTarjetaTexto = (" Tarjeta valida: ###########" + numeroTarjetaCredito.slice(-4) +" ");
      document.getElementById("resultadoTarjeta").innerHTML = validarTarjetaTexto;
      }
      
    },
    false); 

const validator = {
  isValid,
  maskify,
};

export default validator;

function isValid(creditCardNumber) {

  var numeroTarjetaCreditoSplit = creditCardNumber.split(""), sum = 0;

  // creamos un array para almacenar los numeros en posiciones impares y pares
  var numerosImpares = [], numeroPares = [], finalArry = undefined;

   isValid = false;

  if (
    !/\d{15,16}(~\W[a-zA-Z])*$/g.test(creditCardNumber) || creditCardNumber.length > 16
  ) {
    return false;
  }

  if (creditCardNumber.length === 15) {
    for (var i = numeroTarjetaCreditoSplit.length - 1; i >= 0; i--) {
      if (i % 2 === 0) {
        numerosImpares.push(numeroTarjetaCreditoSplit[i]);
      } else {
        numeroPares.push((numeroTarjetaCreditoSplit[i] * 2).toString());
      }
    }
  } else if (creditCardNumber.length === 16) {
    for (var i = numeroTarjetaCreditoSplit.length - 1; i >= 0; i--) {
      if (i % 2 === 0) {
        numerosImpares.push(numeroTarjetaCreditoSplit[i]);
      } else {
        numeroPares.push((numeroTarjetaCreditoSplit[i] * 2).toString());
      }
    }
  }

  // convertimos los numeros de un array

  numeroPares = numeroPares.join("").split("");
  finalArry = numeroPares.concat(numerosImpares);
  console.log(numeroPares)
  for (var j = 0; j < finalArry.length; j++) {
    sum += parseInt(finalArry[j]);
  }

  if (sum % 10 === 0) {
    return 'true';

  }

  // la consola pára mostrar la suma de los numeros.

  console.log(sum);
  // return validarTarjeta; 
  return false;

};
console.log(isValid)

function maskify(creditCardNumber) {
  if (creditCardNumber.length < 4) return creditCardNumber;
  var ultimos4dijitos = creditCardNumber.substr(- 4);
  var dijitosOcultos = creditCardNumber.substr(0, creditCardNumber.length - 4).replace(/[a-zA-Z0-9]/g, "#");
  var enmascarar = dijitosOcultos + ultimos4dijitos;
  return enmascarar
};


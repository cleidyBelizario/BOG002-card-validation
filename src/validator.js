function validarTarjeta(numeroTC) {
    
  numeroTarjetaCreditoSplit = numeroTC.split("");
  sum = 0;
   
  
// creamos un array para almacenar los numeros en posiciones impares y pares
var numerosImpares = [],
  numeroPares = [],
  finalArry = undefined;
var validarTarjeta = false;

if (
  !/\d{15,16}(~\W[a-zA-Z])*$/g.test(numeroTC) ||
  numeroTC.length > 16
) {
  return "Tarjeta Invalida";
}

if (numeroTC.length === 15) {
  for (var i = numeroTarjetaCreditoSplit.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      numerosImpares.push(numeroTarjetaCreditoSplit[i]);
    } else {
      numeroPares.push((numeroTarjetaCreditoSplit[i] * 2).toString());
    }
  }
} else if (numeroTC.length === 16) {
  for (var i = numeroTarjetaCreditoSplit.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
      numerosImpares.push(numeroTarjetaCreditoSplit[i]);
    } else {
      numeroPares.push((numeroTarjetaCreditoSplit[i] * 2).toString());
    }
  }
}

// convertimos los numeros de un array

numeroPares = numeroPares.join("").split("");
finalArry = numeroPares.concat(numerosImpares);

for (var j = 0; j < finalArry.length; j++) {
  sum += parseInt(finalArry[j]);
}

if (sum % 10 === 0) {
  return true;
  
}

// la consola pára mostrar la suma de los numeros.

console.log(sum);
// return validarTarjeta; 
return false; 
}
const validator = {
  validarTarjeta, 


};

export default validator;
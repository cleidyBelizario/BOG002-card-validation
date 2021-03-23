const validator = {
  isValid,
  maskify,
};
export default validator;

function isValid(numeroTC) {
  //variable donde se almacenan los numeros de forma inversa 
  let ingresoNumero = [];
  ingresoNumero[0] = 0;
  let j = 1
  let suma = 0;

  //for para almacenar los numeros de forma inversa 
  for (let i = numeroTC.length - 1; i >= 0; i--) {
    ingresoNumero[j] = parseInt(numeroTC[i]);
    j++;
  } console.log(ingresoNumero)
  //aplicar la operacion a los numeros en posiciones pares 
  for (let g = 0; g < ingresoNumero.length; g++) {
    if (g % 2 === 0) {
      ingresoNumero[g] = ingresoNumero[g] * 2;
      // si es mayor o igual a 10 extrae los numeros para sumarlos.
      if (ingresoNumero[g] >= 10) {
        let numero1 = parseInt(ingresoNumero[g] / 10);
        let numero2 = ingresoNumero[g] % 10;
        ingresoNumero[g] = numero1 + numero2;
      }
    }
    // realizo la suma de todo los array 
    suma += ingresoNumero[g];
    console.log(suma)
  }
  //verifica si el residuo de la suma entre 10 es 0
  if (suma % 10 === 0) {
    return true;
  }
  else {
    return false;
  }
  
 };

 function maskify (numeroTarjeta) {
  let OcultarNumero = numeroTarjeta.replace(/.(?=.{4})/g, "#");
  console.log(OcultarNumero);
  return OcultarNumero;
}



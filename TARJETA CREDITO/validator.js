do{
  var numeroIngresado=prompt('Ingrese tarjeta de credito');
}while(!numeroIngresado);

function ValidarTarjeta(numeroIngresado){
  //array donde se almacenara los numeros de forma inversa
  var array=[]; 
  array[0]=0; 
  var j=1;
  var sum=0; 
  //para almacenar los numeros de forma inversa
  for(var i = numeroIngresado.length-1; i >= 0; i--){  
    array[j]=parseInt(numeroIngresado[i]);
    j++;
  }
  //aplicar la operacion a los numeros pares
  for(var numerosPares=0 ; numerosPares < array.length; numerosPares++){ 
   //para ubicar las posiciones pares
     if(numerosPares%2===0){  
     // multiplica los numeros en posicion pares por dos
        array[numerosPares]=array[numerosPares]*2; 
      //si es mayor o igual a 10
        if(array[numerosPares]>=10){ 
           //extrae el primer digito
        var digitoUno=parseInt(array[numerosPares]/10); 
        //extrae el segundo digito
        var digitoDos=array[numerosPares]%10;  
        //suma los digitos
        array[numerosPares]=digitUno+digitDos; 
      }
    }
    //suma todos los numeros del array
    sum += array[numerosPares]; 
  }
  // Esta condicion verifica si el resultado de la suma que se divide entre 10 es igual 0
  if(sum % 10 ===0){ 
    return true;
  }
  else{
    return false;
  }
 
 return array
}

if(ValidarTarjeta(numeroIngresado)===true){
  document.write('La tarjeta es valida');
  
}
else{
  document.write('La tarjeta es invalida');
}

ValidarTarjeta();

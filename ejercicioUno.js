const precios = [150000, 200000, 500000, 250, 3900];

function preciosEnOrden(precios){
  let max1 = 0;
  let max2 = 0;
  let max3 = 0;

  if(precios.length > 3){
  for (let i = 0; i < precios.length; i++){
  let precioActual = precios[i];
    if (precioActual > max1) {
      max3 = max2;
      max2 = max1;
      max1 = precioActual;
    } else if (precioActual > max2) {
      max3 = max2;
      max2 = precioActual;
    } else if (precioActual > max3) {
      max3 = precioActual;
    }
  }
}


let precioMaximo = precios[0];
  let precioMinimo = precios[0];
if(precios.length < 3){
 for(let j = 0; j < precios.length; j++){
  if(precioMaximo > precios[j]){
    precioMaximo = precios[j];
  }else if(precioMinimo < precios[j]){
    precioMinimo = precios[j];
  }
 }
 return [precioMaximo, precioMinimo];
}
  return [max1, max2, max3];
    
  }    
  
console.log(preciosEnOrden(precios));
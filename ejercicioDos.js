


function facturacion(n, precios,cupon, envio ){
  let subTotal = 0;
  for(let i = 0; i < n; i++){
    subTotal += precios[i];
  }

  let descuento = 0; 
  if(cupon === "DESC10"){
    descuento = (subTotal * 10/100) | 0;
  }else if(cupon === "DESC20"){
    if(subTotal >= 200000){
      descuento = (subTotal * 20 /100) | 0;
    }
  }else if(cupon === "FREESHIP"){
    envio = 0;
  }

  const base = subTotal - descuento;
  const iva = (base * 19 / 100 + 0.5) | 0;
  const total = base + iva + envio;


   console.log("Subtotal " + subTotal);
    console.log("Descuento " + descuento);
    console.log("IVA " + iva);
    console.log("Total " + total);
};
facturacion(2, [100000, 150000], "DESC20", 10000);

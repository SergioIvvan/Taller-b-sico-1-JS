function calcularPropina(total, porcentaje){
  let propina = total * (porcentaje / 100);
  let montoFinal = total + propina;
  return montoFinal;
}
let cuenta = 500000;
let porcentajePropina = 20;
console.log("Monto total a pagar:", calcularPropina(cuenta, porcentajePropina));
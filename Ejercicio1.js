function calcularPropina(total, porcentaje){
  let propina = total * (porcentaje / 100);
  let montoFinal = total + propina;
  return montoFinal;
}
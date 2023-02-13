var mes = prompt("Ingrese el número de un mes");
mes = parseInt(mes);

if (mes >= 1 && mes <= 12) {
  // el número es válido
  if (mes >= 1 && mes <= 2 || mes === 12) {
    alert("Es Invierno");
  }
  if (mes >= 3 && mes <= 5) {
    alert("Es Primavera");
  }
    if (mes >= 6 && mes <= 8) {
    alert("Es Verano");
  }
  if (mes >= 9 && mes <= 11) {
    alert("Es Otoño");
  }  
} else {
  alert("Valor inválido");
}

alert("Mi nombre es David Vargas y mi carnet es 22000599");
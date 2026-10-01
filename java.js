function calcularConsumo() {
  alert("rodou")
    let km = parseDouble(document.getElementById(inputLT).value)
    let lt = parseDouble(document.getElementById(inputLT).value)
    let consumo = km / litros

    if (opcao1.isChecked == true) {
      alert("o consumo foi de" + consumo + "KM/L com gasolina")
    }
    if (opcao2.isChecked == true) {
      alert("o consumo foi de" + consumo + "KM/L com álcool")
    }
    if (opcao3.isChecked == true) {
      alert("o consumo foi de" + consumo + "KM/L com Diesel")
    }
    else {
      alert("Insira!")
    }
}

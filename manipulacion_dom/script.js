const h1 = document.querySelector("h1");
const input = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");

const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#resultado");

function btnOnclick() {
  const sumaInputs = input.value + input2.value;
  pResult.innerHTML = "Resultado: " + sumaInputs
}

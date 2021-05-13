// Carne - 400 gr pessoa  + de 6 horas - 650 gr
// Cerveja - 1200 ml por pessoa  + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa  + 6 horas 1500 ml

// Criancas valem por 0,5


let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {
  console.log('calculando...') 

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let quantidadeTotalCarne = carnePP(duracao) * adultos + ( carnePP(duracao) / 2 * criancas);
  let quantidadeTotalCerveja = cervejaPP(duracao) * adultos; 
  let quantidadeTotalBebidas = bebidasPP(duracao) * adultos + ( bebidasPP(duracao) / 2 * criancas); 

resultado.innerHTML = `<p>${quantidadeTotalCarne} Kg de Carne<p>`
resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalCerveja / 355)} Latas de Cerveja<p>`
resultado.innerHTML += `<p>${quantidadeTotalBebidas}ml de Bebidas<p>`

} 
function carnePP(duracao) {
  if(duracao >= 6) {
    return 650;
  }else{
    return 400;
  }
}
function cervejaPP(duracao) {
  if(duracao >= 6) {
    return 2000;
  }else{
    return 1200;
  }
}
function bebidasPP(duracao) {
  if(duracao >= 6) {
    return 1500;
  }else{
    return 1000;
  }
}

// Crie uma função que receba um número inteiro N e
// retorne o somatório de todos os números de 1 até N.

const somaAll = function (valor) {
  somatorio = 0
  for(let i = 0; i <= valor ; i += 1) {
    somatorio += i
  }
  console.log(somatorio)
}

somaAll(5)
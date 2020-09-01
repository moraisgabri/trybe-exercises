// ler um array e retonar o valor que mais se repete

array = [2, 3, 2, 5, 8, 2, 3]

const repete = function(array) {
  let valor = 0
  let maisRepetido = 0
  let repeticoes = 0
  for (let i = 0; i < array.length; i += 1) {
    for (let k = i; k < array.length; k += 1) {
      if (array[i] === array[k]) {
        repeticoes += 1
      } 
      if (repeticoes > maisRepetido) {
        maisRepetido = repeticoes
        valor = array[i]
      }
    }
    repeticoes = 0 
  }
  console.log(valor)
}

repete(array)
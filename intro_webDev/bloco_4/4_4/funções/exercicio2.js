// retornar índice do maior valor de um array


const maiorValor = function(array) {
let containerValor = 0
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > containerValor) {
      containerValor = array[i]
    }
  }
  console.log(array.indexOf(containerValor))
}

array = [2, 3, 6, 7, 10, 1]
maiorValor(array)
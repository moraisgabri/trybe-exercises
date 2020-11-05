// retornar índice do menor valor de um array


const menorValor = function(array) {
  let containerValor = 0
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] < containerValor) {
        containerValor = array[i]
      }
    }
  console.log(array.indexOf(containerValor))
}
  
array = [2, 4, 6, 7, 10, 0, -3]
menorValor(array)
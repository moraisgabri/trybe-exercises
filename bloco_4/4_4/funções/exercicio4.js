// Crie uma função que receba um array de nomes e retorne 
// o nome com a maior quantidade de caracteres.

arr = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

const maisLetras = function(array) {
  let container = ''
  for (let i = 0 ; i < array.length; i += 1) {
    if (array[i].length > container.length) {
      container = array[i]
    }
  }

  console.log(container)
}

maisLetras(arr)
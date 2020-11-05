// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise.
// Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada.
// Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.

// Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

// Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!"

// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const numsToDivide = [2, 3, 5, 10]

const promise = new Promise((resolve, reject) => {
  const arr = []
  for (let i = 0; i <= 10; i += 1) arr.push(0)
  const arrWithNumberSquared = arr.reduce((acc, element) => {
    const randomNum = Math.ceil(Math.random() * (50 - 1) + 1)
    const randomNumSquared = Math.pow(randomNum, 2)
    element = randomNumSquared
    return [...acc, element]
  }, [])
  const sumOfAll = arrWithNumberSquared.reduce((acc, element) => acc += element, 0)
  console.log(sumOfAll)
  if (sumOfAll < 8000) return resolve(sumOfAll)
  reject(sumOfAll)
})
.then(sum => {
  const divisionArr = numsToDivide.map((element) => element = sum / element)
  console.log(divisionArr)
})
.catch(sum => console.log(`É de mais de 8 mil!!!!!! O que? Sim! ${sum} este aparelho deve estar avariado`))

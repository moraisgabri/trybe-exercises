// fazer uma piramide de *

let container = ''
const n = 5
let qtdeLinhas = Math.round(n / 2)
let posicaoInicial = qtdeLinhas
let qtdeAsteriscos = 1


for(let i = 1; i <= qtdeLinhas ; i++) {
  container = ' '.repeat(posicaoInicial - 1) + '*'.repeat(qtdeAsteriscos)
  console.log(container)
  posicaoInicial-=1
  qtdeAsteriscos+=2
}
// fazer uma piramide com n de base
let container = ''
const n = 7
let qtdeLinhas = Math.round(n / 2)
let posicaoInicial = qtdeLinhas
let qtdeAsteriscos = 1


for(let i = 1; i <= qtdeLinhas ; i++)
{
  container = ' '.repeat(posicaoInicial - 1) + '*'.repeat(qtdeAsteriscos)
  console.log(container)
  posicaoInicial-=1
  qtdeAsteriscos+=2
}



// for(let i = 0 ; i <= metadeP; i += 1) {
//   if (i == 0) {
//     for (let j = 0; j < metadeP - 1; j += 1) {
//       container += ' '
//     }
//     container += '*'
//     console.log(container)
//   } else if (i !== 0 && i !== n) {
//     for(j = 0; j < i ; j += 1) {
//       container += '*'
//     }
     
//     for(j = 0; j < metadeP - i; j++){
//       container += ' '
//     }
//     console.log(container)
//   } else {
//     for(j = 0 ; j < n ; j +=1 ){
//       container = '*'
//     }
//     console.log(container)
//   }
// }
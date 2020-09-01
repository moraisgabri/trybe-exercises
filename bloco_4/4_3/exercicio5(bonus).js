// preencher a pirâmide com espaços

const n = 5
let qtdeLinhas = Math.round(n / 2)
let posicaoInicial = qtdeLinhas
let espacosMeio = 1
let qtdeAsteriscos = 1


for(let i = 1; i <= qtdeLinhas ; i+=1) {
  let container = ''

    if (i==1) {
      container = ' '.repeat(posicaoInicial - 1) + '*'.repeat(qtdeAsteriscos)
      
    }
    else if (i== qtdeLinhas){
      container = '*'.repeat(n)
    }
    else{
      container = ' '.repeat(posicaoInicial - 1) + '*' + ' '.repeat(espacosMeio) + '*'
      espacosMeio +=2
    }

  console.log(container)
  posicaoInicial-=1
}
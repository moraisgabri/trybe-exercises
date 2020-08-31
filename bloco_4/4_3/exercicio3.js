// inverter o lado do triangulo retangulo.

n = 5
container = ''
espaço = ' '


for( let i = 0; i < n; i += 1 ) {
 container = ''

 for(let j = 0; j < n - (i + 1); j += 1) {
  container += espaço
 }

 for(let k = 0; k <= i ; k += 1) {
  container += '*'
 }

 console.log(container)
}
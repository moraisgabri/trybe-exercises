// Faça um programa que defina três variáveis com os valores dos três ângulos 
// internos de um triângulo.Retorne true se os ângulos representarem os 
// ângulos de um triângulo e false caso contrário.

const ang1 = 100
const ang2 = 70
const ang3 = 10

if (ang1 == 0 || ang2 == 0 || ang3 == 0) {
  console.log('Zero não é um valor de ângulo aceito.') 
} else if ((ang1 + ang2 + ang3) === 180) {
  console.log('true')
} else {
  console.log('false')
}
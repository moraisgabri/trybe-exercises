// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto
// o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10.
// Para as faixas de impostos, use as seguintes referências:
// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

const salarioBruto = 9000

let inss = function (salario) {
  if (salario <= 1556.94) {
    let descontado = salario * 0.08
    salario -= descontado
    return salario
  } else if (salario > 1556.94 && salario <= 2594.92 ) {
    descontado = salario * 0.09
    salario -= descontado
    return salario
  } else if (salario > 2594.92 && salario <= 5189.82 ) {
    descontado = salario * 0.11
    salario -= descontado
    return salario
  } else {
    salario -= 570.88
    return salario
  }
}

let impostoRenda = function (salario) {
  if (salario <= 1903.98) {
    return salario
  } else if (salario > 1903.98 && salario <= 2826.65 ) {
    descontado = (salario * 0.075) - 142.80
    salario -= descontado
    return salario
  } else if (salario > 2826.65 && salario <= 3751.05 ) {
    descontado = (salario * 0.15) - 354,80
    salario -= descontado
    return salario
  } else if (salario > 3751.05 && salario <= 4664.68 ){
    descontado = (salario * 0.225) - 636,13
    salario -= descontado
    return salario
  } else {
    descontado = (salario * 0.27) - 869,36
    salario -= descontado
    return salario
  }
}

console.log(impostoRenda(inss(salarioBruto)))
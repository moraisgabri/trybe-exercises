// Crie uma função que receba uma string word e outra string ending.
// Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word

const verificaFimPalavra = function(stringWord, stringEnd) {
  let letrasFinais = stringWord.split('').slice(-2).join('')
  if (stringEnd === letrasFinais) {
    console.log(true)
  } else {
    console.log(false)
  }
}

verificaFimPalavra('zega', 'ga')
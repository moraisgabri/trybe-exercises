// criar uma function que verifica se a palavra é um palindrome

const verificaPalindrome = function(palavra) {
  let novaPalavra = palavra.split('').reverse().join('')
  if (novaPalavra === palavra) {
    console.log(true)
  } else {
    console.log(false)
  }
}

verificaPalindrome('arara')
const biggestWord = string => {
  const palavras = string.split(' ')
  let bigWordLength = 0;
  let biggestWord = '';
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[index].length > bigWordLength) {
      biggestWord = palavras[index]
      bigWordLength = biggestWord.length
    };
  };
  return biggestWord
};

console.log(biggestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))

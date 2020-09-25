
const readName = name => {
  const string = "Tryber x aqui!"
  let wordsArray = string.split(' ')
  wordsArray[wordsArray.findIndex(e => e === 'x')] = name
  return wordsArray.join(' ')
}

const skills = ['Shell', 'HTML', 'CSS', 'Javascript', 'ES6']

const stringMaker = readName => console.log(`${readName} minhas principais habilidades são:
${skills[0]}
${skills[1]}
${skills[2]}
${skills[3]}
${skills[4]}`)

stringMaker(readName('Morais'))

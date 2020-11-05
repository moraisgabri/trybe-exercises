
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const numsArr = Math.abs(n).toString().split('')
  const newArr = []
  for (let index = numsArr.length - 1; index >= 0; index -=1) {
    newArr.push(numsArr[index])
  }
  const reversedNum = parseInt(newArr.join(''))
  if (n < 0) return -reversedNum
  return reversedNum
}

module.exports = reverseInt;
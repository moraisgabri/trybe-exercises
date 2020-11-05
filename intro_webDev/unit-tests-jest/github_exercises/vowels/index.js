// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let numOfVowels = 0
  let strUp = str.toUpperCase()
  for (i in strUp) {
    if (strUp[i] === 'A' || strUp[i] === 'E' || strUp[i] === 'I' || strUp[i] === 'O' || strUp[i] === 'U') {
      numOfVowels += 1
    }
  }

  return numOfVowels
}

module.exports = vowels;
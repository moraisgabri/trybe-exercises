// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let smallerValue = 0

for (let i = 0; i < numbers.length ; i += 1) {
  if (i == 0) {
    smallerValue = numbers[i]
  } else if(smallerValue > numbers[i] ) {
    smallerValue = numbers[i]
  }
}

console.log(smallerValue)
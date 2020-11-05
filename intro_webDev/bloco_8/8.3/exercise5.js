    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  const aCounter = (acc, person) => {
    let count = 0
    for (letter in person) {
      if (person[letter] === 'a' || person[letter] === 'A') {
        count += 1
      }
    }
    return acc + count
  };
  return names.reduce(aCounter, 0)
}

assert.deepStrictEqual(containsA(), 20);
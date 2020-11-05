const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir
// três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const changeTurn = (object, key, value) => {
  object[`${key}`] = `${value}`
  console.log(object)
}

changeTurn(lesson2, 'turno', 'tarde')

// 2. Crie uma função para listar as keys de um objeto.
// Essa função deve receber um objeto como parâmetro.

const listKeys = object => console.log(Object.keys(object))

listKeys(lesson1)

// 3. Crie uma função para mostrar o tamanho de um objeto.

const objLength = object => {
  arrayOfKeys = Object.keys(object)
  console.log(arrayOfKeys.length)
}

objLength(lesson3)

// 4. Crie uma função para listar os valores de um objeto.
// Essa função deve receber um objeto como parâmetro.

const listValues = object => console.log(Object.values(object))

listValues(lesson2)

// 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
// Ao executar o comando console.log(allLessons).

let allLessons = {}
allLessons.lesson1 = lesson1
allLessons.lesson2 = lesson2
allLessons.lesson3 = lesson3
console.log(allLessons)

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total 
// de estudantes em todas as aulas.

const allStudents = allLessons => {
  let students = 0
  for (lesson in allLessons) {
    let lessonStudents = Object.values(allLessons[lesson])[1]
    students += lessonStudents
  }
  console.log(`O total de estudantes é: ${students}`)
}

allStudents(allLessons)

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 

const getValueByNumber = (lesson, number) => {
  let arrayOfValues = Object.values(lesson)
  console.log(`${arrayOfValues[number]}`)
}

getValueByNumber(lesson1, 0)

// 8. Crie uma função que verifique se o par (chave / valor) existe na função.
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da
// chave e o valor da chave.

const verifyPair = (object, key, value) => {
  for (item in object) {
    if (item === key && object[key] === value) {
      return true;
    }
  };
  return false
};
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
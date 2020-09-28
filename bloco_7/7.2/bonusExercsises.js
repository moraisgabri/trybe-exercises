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
  turno: 'tarde'
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

let allLessons = {}
allLessons.lesson1 = lesson1
allLessons.lesson2 = lesson2
allLessons.lesson3 = lesson3


// 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
// Use o objeto criado no exercício 5.

const mathStudents = allLessons => {
  let students = 0
  for (lesson in allLessons) {
    let listOfValues = Object.values(allLessons[lesson])
    if (listOfValues[0] === 'Matemática') {
      students += listOfValues[1]
    }
  }
  return students
}

console.log(mathStudents(allLessons))

// 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor
// ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. 
// Use o objeto criado no exercício 5.

const teacherRelatory = allLessons => {
  for (lesson in allLessons) {
    let listOfKeys = Object.keys(allLessons[lesson])
    let listOfValues = Object.values(allLessons[lesson])
    const relatory = {}
    relatory[listOfKeys[2]] = listOfValues[2]
    relatory[listOfKeys[0]] = listOfValues[0]
    relatory[listOfKeys[3]] = listOfValues[3]
    relatory[listOfKeys[1]] = listOfValues[1]
    console.log(relatory)
  }
}

teacherRelatory(allLessons)
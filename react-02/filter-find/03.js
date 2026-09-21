const students = [
  { name: "Анна", age: 19, grade: 7, course: 2 },
  { name: "Диана", age: 17, grade: 8, course: 1 },
  { name: "Виктория", age: 21, grade: 5, course: 3 },
  { name: "Григорий", age: 18, grade: 9, course: 2 },
  { name: "Борис", age: 20, grade: 4, course: 3 },
  { name: "Евгений", age: 16, grade: 6, course: 1 },
]

function isAdult(person) {
  return person.age >= 18;
}

function isExcellent(student) {
  return student.grade > 8;
}

function isSecondCourse(student) {
  return student.course === 2;
}

const adultStudents = students.filter(isAdult)
const firstExcellent = students.find(isExcellent)
const secondCourse = students.filter(isSecondCourse)
const firstSecondCourse = students.find(isSecondCourse)

console.log(adultStudents, firstExcellent, secondCourse, firstSecondCourse);
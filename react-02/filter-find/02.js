const students = [
  { name: "Анна", age: 19, grade: 7, course: 2 },
  { name: "Диана", age: 17, grade: 8, course: 1 },
  { name: "Виктория", age: 21, grade: 5, course: 3 },
  { name: "Григорий", age: 18, grade: 9, course: 2 },
  { name: "Борис", age: 20, grade: 4, course: 3 },
  { name: "Евгений", age: 16, grade: 6, course: 1 },
]

const adults = students.filter(student => student.age >= 18)
console.log(adults)

const excellentStudents = students.filter(student => student.grade >= 8);
console.log(excellentStudents)

const secondCourse = students.filter(student => student.course === 2);
console.log(secondCourse)

const adultGoodStudents = students.filter(student => {
  return student.age >= 18 && student.grade > 6;
})
console.log(adultGoodStudents)

const victoria = students.find(student => student.name === 'Виктория')
console.log(victoria)

const firstExcellent = students.find(student => student.grade > 8);
console.log(firstExcellent)

const tooYoung = students.find(student => student.age < 16);
console.log(tooYoung) 
const persons = [
  { name: 'dmitry', age: 37 },
  { name: 'john', age: 17 },
  { name: 'rita', age: 18 },
]

const adult = persons.find((person, index) => {
  console.log(index);
  return person.age === 100;
});

console.log(adult);
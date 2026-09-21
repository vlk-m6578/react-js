const persons = [
  { name: 'dmitry', age: 37 },
  { name: 'john', age: 17 },
  { name: 'rita', age: 18 },
]

const adults = persons.filter((person, index, array) => {
  console.log('predicate is called: ' + index);
  console.log(array);
  return person.age >= 18;
});

// Strategy Pattern
// const adults = persons.filter(predicate2);
function predicate1(person) {
  return person.age >= 18;
}
function predicate2(person) {
  return person.age < 18;
}

console.log(adults);
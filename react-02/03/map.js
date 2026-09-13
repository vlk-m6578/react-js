// const numbers = [1, 2, 3, 4, 5];
// const newArray = numbers.map((number) => {
//   return {age: number};
// })
// console.log(newArray.length);
// console.log(newArray);

const words = ['hello', 'world'];
const wordsInfo = words.map((word, index, array) => {
  return {
    orderNumber: index + 1,
    lettersCount: word.length
  }
})
console.log(wordsInfo);
const numbers = [1, 15, 3, 42, 8, 19, 7, 25, 11, 33]

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

const bigNumbers = numbers.filter(number => number > 10);
console.log(bigNumbers);

const firstBig = numbers.find(number => number > 20);
console.log(firstBig);


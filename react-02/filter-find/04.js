const colors = ["красный", "синий", "зелёный", "жёлтый", "фиолетовый"]

const evenIndexColors = colors.filter((color, index) => index % 2 === 0);
console.log(evenIndexColors);

const colorAfterIndex2 = colors.find((color, index) => index > 2);
console.log(colorAfterIndex2);

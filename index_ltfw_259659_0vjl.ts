const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(getRandomString());
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
orange - apple

const multiply = (a, b) => a * b;

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
grape

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
let array = getRandomArray(); array.forEach(item => console.log(item));
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
banana + true
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
grape

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);


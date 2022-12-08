import { readInputFile } from "../../utils/js/index.js";

const input = await readInputFile(process.env.INPUT_MODE, '01');
const maxCalories = Math.max(...input.split('\n').reduce((prev, curr) => {
    curr === '' ? prev.push(0) : (prev[prev.length - 1] += Number(curr));
    return prev;
}, [0]));

console.log('The max calories an elf is carrying:', { maxCalories });

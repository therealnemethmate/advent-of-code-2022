import { readInputFile } from "../../utils/js";

const input = readInputFile(process.env.INPUT_MODE);
const maxCalories = Math.max(...input.split('\n').reduce((prev, curr) => {
    curr === '' ? prev.push(0) : (prev[prev.length - 1] += Number(curr));
    return prev;
}, [0]));

console.log('The max calories an elf is carrying:', { maxCalories });

import { readInputFile } from "../../utils/js/index.js";

const input = await readInputFile(process.env.INPUT_MODE, '01');
const maxCalories = Math.max(...input.split('\n\n').reduce((prev, curr) => {
    return prev.concat(curr.split('\n').reduce((prevNumber, n) => prevNumber += Number(n), 0));
}, []));

console.log('The max calories an elf is carrying:', { maxCalories });

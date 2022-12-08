import { readInputFile } from "../../utils/js/index.js";

const input = await readInputFile(process.env.INPUT_MODE, '02');
const scoreMap = {
    'A X': 4, 'A Y': 8, 'A Z': 3,
    'B X': 1, 'B Y': 5, 'B Z': 9,
    'C X': 7, 'C Y': 2, 'C Z': 6,
}

const score = input.split('\n').reduce((prev, curr) => scoreMap[curr] ? prev += scoreMap[curr] : prev, 0);
console.log('The score is: ', score);

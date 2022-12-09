import { readInputFile } from "../../utils/js/index.js";

const input = await readInputFile(process.env.INPUT_MODE, '02');

const partOneMap = {
    'A X': 4, 'A Y': 8, 'A Z': 3,
    'B X': 1, 'B Y': 5, 'B Z': 9,
    'C X': 7, 'C Y': 2, 'C Z': 6,
}

const partTwoMap = {
    'A X': 3, 'A Y': 4, 'A Z': 8,
    'B X': 1, 'B Y': 5, 'B Z': 9,
    'C X': 2, 'C Y': 6, 'C Z': 7,
}

const scorePartOne = input.split('\n').reduce((prev, curr) => partOneMap[curr] ? prev += partOneMap[curr] : prev, 0);
const scorePartTwo = input.split('\n').reduce((prev, curr) => partTwoMap[curr] ? prev += partTwoMap[curr] : prev, 0);

console.log('The scores are: ', { scorePartOne, scorePartTwo });

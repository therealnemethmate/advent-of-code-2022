import { readInputFile } from "../../utils/js/index.js";

const input = await readInputFile(process.env.INPUT_MODE, '03');

function getMiddle(value) {
    return Math.floor(value.length / 2);
}

function getPriority(value, i) {
    return /[a-z]/.test(value) ? value.charCodeAt(i) - 96 : value.charCodeAt(i) - 38
}

const scorePartOne = input.split('\n').reduce((aggr, curr) => {
    const firstHalfSet = new Set(curr.slice(0, getMiddle(curr)).split(''));
    const secondHalf = curr.slice(getMiddle(curr), curr.length).split('');
    const commonItems = new Set(Array.from(secondHalf.filter((item) => firstHalfSet.has(item))));
    if (!commonItems.size) return aggr;
    return aggr + Math.max(...[...commonItems].map((item, i) => getPriority(item, i)));
}, 0);

let scorePartTwo = 0;
for (const iterator of input.match(/(?=[\s\S])(?:.*\n?){1,3}/g)) {
    const lines = iterator.split('\n');
    const commonLetter = lines[0].split('').find(char => lines.filter(c => c).every((otherLine) => otherLine.indexOf(char) >= 0));
    scorePartTwo += getPriority(commonLetter);
}

console.log('Result: ', { scorePartOne, scorePartTwo });

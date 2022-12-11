import { readInputFile } from "../../utils/js/index.js";

const input = await readInputFile(process.env.INPUT_MODE, '03');

function getMiddle(value) {
    return Math.floor(value.length / 2);
}

function getPriority(value, i) {
    return /[a-z]/.test(value) ? value.charCodeAt(i) - 96 : value.charCodeAt(i) - 38
}

const score = input.split('\n').reduce((aggr, curr) => {
    const firstHalfSet = new Set(curr.slice(0, getMiddle(curr)).split(''));
    const secondHalf = curr.slice(getMiddle(curr), curr.length).split('');
    const commonItems = new Set(Array.from(secondHalf.filter((item) => firstHalfSet.has(item))));
    if (!commonItems.size) return aggr;
    return aggr + Math.max(...[...commonItems].map((item, i) => getPriority(item, i)));
}, 0);

console.log(score);

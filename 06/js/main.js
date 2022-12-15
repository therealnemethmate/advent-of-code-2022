import { readInputFile } from "../../utils/js/index.js";

const WINDOW_SIZE_PART_1 = 4;
const WINDOW_SIZE_PART_2 = 14;

let rawInput = await readInputFile(process.env.INPUT_MODE, '06');

function next(input, index, windowSize) {
    const window = input.slice(index, index + windowSize).split('');
    if (window.length !== new Set(window).size) {
        return next(input, ++index, windowSize);
    }
    console.log('Found!!!', { window });
    return index + windowSize;
}

console.log('Part one score: ', next(rawInput, 0, WINDOW_SIZE_PART_1));
console.log('Part two score: ', next(rawInput, 0, WINDOW_SIZE_PART_2));

import { readInputFile } from "../../utils/js/index.js";

const input = await readInputFile(process.env.INPUT_MODE, '04');

function range(start, stop, step) {
    return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
}

const resultPartOne = input.split('\n').reduce((aggr, line) => {
    if (!line.length) return aggr;
    const sequencePairs = line.split(',')
        .map((pair) => pair.split('-').map(Number))
        .map((pair) => range(pair[0], pair[1], 1));
    const setSize = new Set(sequencePairs.flat()).size;
    return setSize === sequencePairs[0].length || setSize === sequencePairs[1].length
        ? aggr + 1
        : aggr;
}, 0);

const resultPartTwo = input.split('\n').reduce((aggr, line) => {
    if (!line.length) return aggr;
    const sequencePairs = line.split(',')
        .map((pair) => pair.split('-').map(Number))
        .map((pair) => range(pair[0], pair[1], 1));
    const setSize = new Set(sequencePairs.flat()).size;
    return (sequencePairs[0].length + sequencePairs[1].length) - setSize
        ? aggr + 1
        : aggr;
}, 0);

console.log('Result', { resultPartOne, resultPartTwo });

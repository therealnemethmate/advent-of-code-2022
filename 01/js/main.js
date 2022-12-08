import * as fs from 'fs/promises';
import { env } from 'process';

const fileName = env.INPUT_MODE === 'test' ? 'input-test.txt' : 'input.txt'
const input = await fs.readFile(`./${fileName}`);

const maxCalories = Math.max(...input.toString().split('\n').reduce((prev, curr) => {
    curr === '' ? prev.push(0) : (prev[prev.length - 1] += Number(curr));
    return prev;
}, [0]));

console.log('The max calories an elf is carrying:', { maxCalories })

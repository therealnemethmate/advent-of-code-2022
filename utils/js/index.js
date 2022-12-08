import * as fs from 'fs/promises';

export async function readInputFile(inputMode) {
    const fileName = inputMode === 'test' ? 'input-test.txt' : 'input.txt'
    return (await fs.readFile(`./${fileName}`)).toString();
}

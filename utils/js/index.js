import * as fs from 'fs/promises';

export async function readInputFile(inputMode, task) {
    const fileName = inputMode === 'test' ? 'input-test.txt' : 'input.txt'
    return (await fs.readFile(`../${task}/${fileName}`)).toString();
}

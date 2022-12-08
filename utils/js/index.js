const fs = require('fs/promises')

async function readInputFile(inputMode, task) {
    const fileName = inputMode === 'test' ? 'input-test.txt' : 'input.txt'
    return (await fs.readFile(`../../${task}/${fileName}`)).toString();
}

module.exports = {
    readInputFile,
}

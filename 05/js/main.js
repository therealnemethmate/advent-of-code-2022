import { readInputFile } from "../../utils/js/index.js";


function getBoard(rawBoard) {
    const rows = rawBoard.split('\n')
    return rows
        .map((row, rowIndex) => row.split('')
            .map((c, i) => {
                const isLetter = c.match(/[A-Z]/);
                if (isLetter) return `${c}${rows[rows.length - 1][i]}${rowIndex}`;
                return c;
            }
        ))
        .flat()
        .filter((item) => item.length === 3)
        .reduce((acc, curr) => {
            let [ item, colIndex, rowIndex ] = curr;
            colIndex = Number(colIndex);
            rowIndex = Number(rowIndex);
            if (acc[colIndex]) {
                acc[colIndex][rowIndex] = item;
                return acc;
            } 
            acc[colIndex] = new Array(rows.length - 1).fill(undefined);
            acc[colIndex][rowIndex] = item;
            return acc;
        }, [])
        .map((col) => col.filter((item) => item));
}

const input = await readInputFile(process.env.INPUT_MODE, '05');
const [ rawBoard, moves ] = input.split('\n\n');
const moveList = moves.split('\n').reduce((acc, instruction) => {
    if(!instruction) return acc;
    const [ amount, from, to ] = instruction.match(/\b([0-9]|[1-9][0-9])\b/g);
    acc.push({
        amount: Number(amount),
        from: Number(from),
        to: Number(to)
    });
    return acc;
}, []);

const boardPart1 = getBoard(`${rawBoard}`);
moveList.forEach((move) => {
    for (let i = 1; i <= move.amount; i++) {
        boardPart1[move.to].unshift(boardPart1[move.from].shift());        
    }
});
console.log(boardPart1.map((item) => item[0]).join(''));

const boardPart2 = getBoard(`${rawBoard}`);
moveList.forEach((move) => {
    const items = [];
    for (let i = 1; i <= move.amount; i++) {
        items.push(boardPart2[move.from].shift());
    }
    boardPart2[move.to] = items.concat(boardPart2[move.to]);
});
console.log(boardPart2.map((item) => item[0]).join(''));

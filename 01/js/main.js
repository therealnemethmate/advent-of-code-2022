import { readInputFile } from "../../utils/js/index.js";

const input = await readInputFile(process.env.INPUT_MODE, '01');

/**
 * @param {string[] | number[]} arr 
 * @returns the summarized value of the numbers
 */
function sum(arr) {
    return arr.reduce((sum, n) => sum += Number(n), 0);
}

function getSumCalories(input) {
    return input.split('\n\n').reduce(
        (prev, curr) => prev.concat(sum(curr.split('\n'))), []
    )
}

(function main() {
    const maxCalories = Math.max(...getSumCalories(input));
    const top3Calories = sum(getSumCalories(input).sort((a, b) => b - a).slice(0, 3));
    console.log('Results:', { maxCalories, top3Calories });    
})();

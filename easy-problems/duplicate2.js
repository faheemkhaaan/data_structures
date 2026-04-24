
const generator = require("../utils/array.js")

function containsDuplicate2(array, k) {

    if (k === 0) return false;

    let start = 0;
    const set = new Set();

    for (let end = 0; end < array.length; end++) {

        if (set.has(array[end])) {
            return true
        }
        if (end - start > k) {
            set.delete(array[start])
        }
    }
}
const map = new Map();

map.set(2, 3);
map.delete(2)

const set = new Set();
set.add(4);
set.delete(4)
set.has(4)

const array = generator.randomSortedArray();
const array2 = [2, 3, 4, 5, 6, 7, 8, 6];
const k = 4;

const result = containsDuplicate2(array, k);

console.log(result);
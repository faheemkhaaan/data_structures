
const array = require('../utils/array.js');
const { perf } = require("../utils/performance.js");
/**
 * 
 * @param {Array} arr 
 * @param {number} target 
 * @returns {boolean}
 */
function checkDoubleElements(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] === arr[j]) return true
        }
    }
    return false;
}

function checkDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) return true;
    }
    return false;
}

function checkDuplicateWithHashSet(arr) {
    const set = new Set();

    for (let i = 0; i < arr.length; i++) {

        if (set.has(arr[i])) return true;

        set.add(arr[i]);
    }
    return false;
}

const unSorted = array.randomUnSortedDuplicateArray();
const sorted = array.randomeSortedDuplicateArray();
const hard = array.createHardTestCase();

// console.log(unSorted)

perf(() => checkDuplicateWithHashSet(hard), "checkDuplicateWithHashSet");
perf(() => checkDuplicate(hard), "checkDuplicate");
perf(() => checkDoubleElements(hard), "checkDoubleElements");




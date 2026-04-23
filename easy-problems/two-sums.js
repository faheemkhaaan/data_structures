


/**
 * 
 * @param {Array} array 
 * @param {number} target 
 * @returns {Array}
 */
function twoSumsOn(array, target) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {

            if (array[i] + array[j] === target) return [i, j];
        }
    };
    return [];
}

/**
 * 
 * @param {Array} array 
 * @param {number} target 
 * @returns {Array}
 */
function twoSum(array, target) {
    const complements = new Map()
    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i];

        if (complements.has(complement)) {
            return [complements.get(complement), i];
        }
        complements.set(array[i], i);
    }
    return []
}

const len = 1_000_000; // 1 million is plenty to see the O(n^2) struggle
const base = new Uint32Array(len);

let currentVal = 5;
for (let j = 0; j < len; j++) {
    // Increment by a random small amount (1 to 5)
    // This ensures the array is sorted but the values are varied
    currentVal += Math.floor(Math.random() * 5) + 1;
    base[j] = currentVal;
}

// Pick two values near the end of the array to create a "Hard" target
// This forces the algorithms to scan almost the entire dataset
const idx1 = len - 500;
const idx2 = len - 100;
const target = base[idx1] + base[idx2];

console.log(`Target: ${target} (Indices: ${idx1}, ${idx2})`);

console.time()
const result2 = twoSum(base, target);
// const foundIndecies = twoSum(base, target);
console.timeEnd();
console.log("twoSum using hash map");


console.time()
const result1 = twoSumsOn(base, target);
// const foundIndecies = twoSum(base, target);
console.timeEnd();
console.log('twoSum using 2 loops');
// console.log(foundIndecies)





/**
 * 
 * @param {Array} array 
 * @param {number} target 
 * @returns {Array}
 */
function twoSums(array, target) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {

            if (array[i] + array[j] === target) return [i, j];
        }
    };
    return [];
}




const array = [15, 11, 91, 21, 31, 42, 53, 63, 64, 23, 42, 3, 242, 4, 52, 7, 2,];
const target = 9;

console.time()
const foundIndecies = twoSums(array, target);
console.timeEnd();
console.log(foundIndecies)



/**
 *  
 * @param {Array} array 
 * @param {number} target 
 * @returns {number}
 */
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1;
}



const unsortedArray = [43, 523, 4, 3, 6, 7, 2, 1, 5, 6, 7, 8];
const foundIndex = linearSearch(unsortedArray, 2);
console.log('found index: ', foundIndex);


/**
 * 
 * @param {Array} array 
 * @param {number} target 
 */
function binarySearch(array, target) {

    let left = 0;
    let right = array.length;
    while (left <= right) {
        let midd = (left + right) / 2;
        if (array[midd] === target) return midd;
        if (array[midd] > target) right = midd - 1;
        if (array[midd] < target) left = midd + 1;
    }

    return -1;
}
const array = [2, 3, 5, 7, 8, 11]
const found = binarySearch(array, 5);
// console.log(found);

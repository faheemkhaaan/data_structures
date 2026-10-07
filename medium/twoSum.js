

/**
  * @param {number[]} numbers
  * @param {number} target
  * @return {number[]}
  */
function twoSum(numbers, target) {


    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {

        let sum = numbers[left] + numbers[right]

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else if (sum > target) {
            right--
        }


    }
    return []
}


const numbers = [-10, -5, 0, 3, 7], target = -2;

const result = twoSum(numbers, target);

console.log(result)
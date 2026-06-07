
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    let seen = null;

    for (let i = 0; i < nums.length; i++) {
        if (seen !== nums[i]) {
            seen = nums[i];
        } else {
            nums.splice(i, 1);
            i--
        }
    }
    return nums;
};


const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const result = removeDuplicates(nums);

console.log(result)
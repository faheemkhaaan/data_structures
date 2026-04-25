/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    const n = nums.length;
    const prefix = Array(n);
    const suffix = Array(n);
    const output = Array(n);

    prefix[0] = 1;
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    suffix[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1]

    }

    for (let i = 0; i < n; i++) {
        output[i] = prefix[i] * suffix[i]
    }

    return output

};

const nums = [-1, 1, 0, -3, 3]
const output = productExceptSelf(nums);
/*

  [-1,1,0,-3,3]
  prefix = [1,-1,-1,0,0]
  suffix = [0,0,-9,3,1]
  output = [0,0,-9,0,0]
*/

console.log(output)

/*

To calculate prefix.


1. get the previous index value and if it is null we save the current index value in the calculated values.
2. and if the previous index is not null we take the previous value and get the calcaulted value of previosu index multiply them and save those value.
*/
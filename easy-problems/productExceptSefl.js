


/**
 * 
 * @param {number[]} nums 
 */
function productExceptSelf(nums) {


    const output = new Array(nums.length);

    let prefix = 1
    for (let i = 0; i < nums.length; i++) {
        output[i] = prefix;
        prefix *= nums[i]
    }
    console.log(output)

    let suffix = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] = suffix;
        suffix *= nums[i]
    }

    return output
}


const nums = [1, 2, 4, 6]
const result = productExceptSelf(nums);

console.log(result)
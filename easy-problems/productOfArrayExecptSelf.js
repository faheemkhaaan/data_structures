/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {


    const output = [...nums];
    const prefix = (index) => {
        if (index === null) return 1;
        let result = 1
        for (let i = index - 1; i > 0; i--) {
            result *= nums[i]
            console.log({ name: "prefix", num: nums[i], result, index })
        }
        return result + 0;
    }
    const sufix = (index) => {
        if (index === null) return 1;
        let result = 1;
        for (let i = index + 1; i < nums.length; i++) {
            result *= nums[i];
            console.log({ name: "sufix", num: nums[i], result, index })
        }
        return result + 0;
    }

    for (let i = 0; i < nums.length; i++) {


        const pre = prefix(i);
        const su = sufix(i);
        console.log({ pre, su })
        const result = su * pre
        output[i] = result;
    }
    return output
};

const nums = [-1, 1, 0, -3, 3]
const output = productExceptSelf(nums);
/*

    (-1)                    (1)              (0)            (-3)            (3)
     |                       |                |
    / \                     / \              / \
  nul  (1)(0)(-3)(3)    (-1) (0)(-3)(3) (-1)(0) (-3)(3)
*/

console.log(output)
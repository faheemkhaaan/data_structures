
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;
    const set = new Set();
    let longestSubsequenc = 0;
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    };

    for (const num of set.keys()) {
        const lowerThan = nums - 1;
        if (set.has(lowerThan)) {
            continue;
        } else {
            let currentNum = num;
            let currentSub = 1;
            while (set.has(currentNum + 1)) {
                currentNum++;
                currentSub++
            }
            longestSubsequenc = Math.max(longestSubsequenc, currentSub);
        }

    }
    return longestSubsequenc
};


const nums = [100, 4, 200, 1, 3, 2, 5, 6];
const result = longestConsecutive(nums);
console.log(result)
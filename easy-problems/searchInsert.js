/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {

        const mid = Math.floor((left + right) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;

};

/*
setp 1 
left = 0;
right = 3

left < right = 0<3

mid = left + right /2 = 0+3/2 = 1;

nums[1]<target = 3 < 7 = true

left = mid+1 = 1+1 = 2


left<right = 2<3
mid = left+right/2 = 2+3/2 = 2

nums[2]<target = 5 < 7 = true
left = mid + 1 = 2+1 = 3


3<3

mid = left+right/2 = 3+3/2 = 3

nums[3]<target = 6<7
left = mid+1 = 3+1 = 4





*/

const nums = [1, 3, 5, 6], target = 7
const result = searchInsert(nums, target);
console.log(result)
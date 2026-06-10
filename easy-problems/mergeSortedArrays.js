/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let p = m + n - 1;

    let p1 = m - 1;
    let p2 = n - 1;

    while (p > 0) {

        const p1GreaterThanP2 = nums1[p1] >= nums2[p2]
        if (p1GreaterThanP2) {
            nums1[p] = nums1[p1];
            p1--
        } else {
            nums1[p] = nums2[p2];
            p2--
        }
        p--
    }

};


const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;


const result = merge(nums1, m, nums2, n);

console.log(nums1)
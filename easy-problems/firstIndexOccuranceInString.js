/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack.length === 0) return 0;

    let occurance = -1
    let right = 0;

    for (let left = 0; left <= haystack.length; left++) {
        console.log(left - right)
        if (left - right === needle.length) {
            const seen = haystack.substring(right, left);
            if (seen !== needle) {
                occurance = right
            } else {

                right++
            }
        }
    }
    return occurance
};

const haystack = "leetcode"
const needle = "leeto"
const result = strStr(haystack, needle);

console.log(result);
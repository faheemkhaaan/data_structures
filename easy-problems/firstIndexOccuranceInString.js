/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack.length === 0) return 0;

    let occurance = -1;
    let seen = ''
    for (let i = 0; i < haystack.length; i++) {

        seen += haystack[i];

        if (seen.length === needle.length) {
            if (seen === needle) {
                occurance = needle.length - i - 1
            } else {
                seen = ''
            }
        }
    }
    return occurance
};

const haystack = "leetcode";
const needle = "leeto";
const result = strStr(haystack, needle);

console.log(result);
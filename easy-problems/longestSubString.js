

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let start = 0;
    let subStr = new Set();
    let longest = 0;
    for (let i = 0; i < s.length; i++) {


        while (subStr.has(s[i])) {
            subStr.delete(s[start]);
            start++
        }
        subStr.add(s[i])
        longest = Math.max(i - start + 1, longest);

    }
    return longest;
};

const s = 'abcabcbb';
const result = lengthOfLongestSubstring(s);
console.log(result)
// s.substring()
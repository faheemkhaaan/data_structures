/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    let count = 0;
    let i = s.length - 1;

    while (i >= 0 && s[i] === " ") {
        i--
    }
    while (i >= 0 && s[i] !== ' ') {
        count++;
        i--
    }
    return count;
};


const s = "   fly me   to   the moon  "
const result = lengthOfLastWord(s);
console.log(result);
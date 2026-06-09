/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {


    let count = 0;
    const st = s.trim()
    for (let i = 0; i < st.length; i++) {
        if (st[i].trim()) {
            count++;
        } else {
            count = 0;
        }
    }
    return count;
};


const s = "   fly me   to   the moon  "
const result = lengthOfLastWord(s);
console.log(result);
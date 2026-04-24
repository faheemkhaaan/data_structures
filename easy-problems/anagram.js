/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let copyt = t;
    let copys = s;
    for (let i = 0; i < s.length; i++) {

        for (let j = 0; j < t.length; j++) {
            if (s[i] === t[j]) {
                copys = copys.replace(s[i], '');
                copyt = copyt.replace(t[j], "");
                break;
            }
            // console.log(t, t.length)
        }
    }
    return copys.length === 0 && copyt.length === 0 ? true : false;
};

const s = 'anagram';
const t = 'nagaram'

console.log(isAnagram(s, t));
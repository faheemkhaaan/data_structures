/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        let current = map.get(s[i]) ?? 0;
        map.set(s[i], current + 1);
    }
    for (let j = 0; j < t.length; j++) {
        let current = map.get(t[j]) ?? 0;
        map.set(t[j], current - 1);
    }
    return !map.values().some(value => { return value > 0 });
};

const s = 'anagram';
const t = 'nagaram'


console.log(isAnagram(s, t));
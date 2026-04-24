/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        let current = map.get(s.charAt(i)) ?? 0;
        console.log(map)
        map.set(s.charAt(i), current + 1);
        map.set(t.charAt(i), current - 1);
    }
    console.log(map)
    return !map.values().some(a => a > 0)
};

const s = 'anagram';
const t = 'nagaram'


console.log(isAnagram(s, t));
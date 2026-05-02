

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);

    const getIndex = (char) => char.charCodeAt(0) - 97;

    for (let i = 0; i < s1.length; i++) {
        s1Count[getIndex(s1[i])]++;
        s2Count[getIndex(s2[i])]++;
    }
    const matches = (arr1, arr2) => {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        }
        return true;
    }
    for (let i = 0; i < s2.length - s1.length; i++) {
        if (matches(s1Count, s2Count)) return true;

        s2Count[getIndex(s2[i + s1.length])]++;
        s2Count[getIndex(s2[i])]--;
    }
    return matches(s1Count, s2Count)
};


const s1 = "ab";
const s2 = "eidbaooo";

const result = checkInclusion(s1, s2);

console.log(result);

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {

    const occurances = new Array(26).fill(0);
    const getIndex = (char) => char.charCodeAt(0) - 65;
    let left = 0;
    let maxCount = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        const charIndex = getIndex(s[right]);

        occurances[charIndex]++

        maxCount = Math.max(maxCount, occurances[charIndex]);

        while ((right - left + 1) - maxCount > k) {
            occurances[getIndex(s[left])]--
            left++
        }

        maxLength = Math.max(maxLength, right - left + 1);


    }

    return maxLength;
};
/**
 *  let left = 0, right = 0;
    const occurances = new Array(26).fill(0);
    let maxCount = 0;
    let maxLength = 0
    const getIndex = (char) => (char.charCodeAt(0) - 65);

    for(right=0; right < s.length; right++){
        const charIndex = getIndex(s[right]);
        occurances[charIndex]++

        maxCount = Math.max(maxCount,occurances[charIndex]);

        while((right-left+1)-maxCount > k){
            occurances[getIndex(s[left])]--
            left++
        }

        maxLength = Math.max(maxLength,right-left+1)
    }

    return maxLength
 */


const s = "ABAB";
const k = 1;

const result = characterReplacement(s, k);
console.log(result)
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let keep = strs[0];
    for (let i = 1; i < strs.length; i++) {

        const current = strs[i];
        let newKeep = ''
        for (let j = 0; j < keep.length; j++) {
            if (current[j] === keep[j]) {
                newKeep += current[j]
            } else {
                break;
            }
        }
        keep = newKeep
    }
    return keep
};

const input = ["cir", "car"]

const result = longestCommonPrefix(input);
console.log(result)
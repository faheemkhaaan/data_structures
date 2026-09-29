

/**
 * 
 * @param {string[]} strs 
 * @returns {string[][]}
 */
function groupAnagram(strs) {

    if (strs.length === 0) return [[strs[0]]]
    const map = new Map();
    const getKey = (word) => {
        const key = new Int8Array(26);

        for (const letter of word) {
            const index = letter.charCodeAt(0) - 97;
            key[index] += 1
        }
        return key.join(",")
    }

    for (const letter of strs) {
        const key = getKey(letter);
        if (map.has(key)) {
            const group = map.get(key);
            group.push(letter)
        } else {
            map.set(key, [letter]);

        }
    }

    return [...map.values()]
}

const strs = ["act", "pots", "tops", "cat", "stop", "hat"];
const result = groupAnagram(strs);

console.log(result)
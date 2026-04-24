

function groupAnagram(strs) {
    if (strs.length === 0) return [];


    function chartIndex(char) {
        return (char.charCodeAt(0) - 'a'.charCodeAt(0));
    }


    const groups = new Map();
    for (const word of strs) {
        const group = [];
        const key = new Int8Array(26);
        for (const char of word) {
            key[chartIndex(char)] += 1;
        };
        const hasKey = groups.has(key.toString());
        // console.log(hasKey)
        if (!hasKey) {
            group.push(word);
            groups.set(key.toString(), group);
        } else {
            const group = groups.get(key.toString());
            group.push(word)
            groups.set(key.toString(), group);
        }
    }
    // console.log(groups)
    return Array.from(groups.values())
}

const string = 'z';

const array = new Int32Array(26);
const indexOfString = (string.charCodeAt() - 'a'.charCodeAt(0)).toString()


const a = ["eat", "tea", "tan", "ate", "nat", "bat"]
const b = ["ddddddddddg", "dgggggggggg"]
const result = groupAnagram(b)
console.log(result)
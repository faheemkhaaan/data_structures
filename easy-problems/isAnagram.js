

function isAnagram(s, t) {
    if (s.length !== t.length) return false
    const sMap = new Map();
    const tMap = new Map()

    for (const letter of s) {
        sMap.set(letter, (sMap.get(letter) ?? 0) + 1)
    }

    for (const letter of t) {
        tMap.set(letter, (tMap.get(letter) ?? 0) + 1)
    }

    for (const [key, value] of tMap.entries()) {
        console.log(key, value)
        if (sMap.get(key) !== value) {
            return false
        }

    }

    console.log(sMap, tMap)
    return true
}

const s = 'ab';
const t = 'a'

const result = isAnagram(s, t);
console.log(result)
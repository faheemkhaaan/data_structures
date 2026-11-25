

function checkInclusion(s1, s2) {

    const s1Key = getKey(s1);

    let l = 0;

    for (let r = 0; r < s2.length; r++) {


        if ((r - l + 1) > s1.length) {
            l++;
        };

        const slice = s2.slice(l, r + 1);
        const sliceKey = getKey(slice);
        console.log(sliceKey, s1Key)
        if (s1Key === sliceKey) {
            return true;
        }
    }
    return false


};

function getKey(str) {
    const key = new Array(26).fill(0);

    for (const s of str) {

        const code = s.charCodeAt(0) - 97;

        key[code] = key[code] + 1;
    };
    return key.toString()
};


const s1 = "ab";
const s2 = "lecabee";

const result = checkInclusion(s1, s2);

console.log(result)
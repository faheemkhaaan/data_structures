class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let str = "";

        for (const s of strs) {

            const hashedStr = `${s.length}#${s}`;
            str += hashedStr
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedStr = [];
        let i = 0;

        let currentTime = 0;
        let timeFrame = 100000;


        while (i < str.length) {

            const index = str.indexOf("#", i);
            const length = parseInt(str.substring(i, index), 10);
            const start = Number(index) + 1;
            decodedStr.push(str.substring(start, start + length));
            i = start + length;
            // console.log(i)

            if (currentTime > timeFrame) {
                currentTime = 0;
            }
            currentTime++;
        }
        return decodedStr
    }
}

const encoder = new Solution()


const strs = ["Hello", "World"];
const str = encoder.encode(strs);
console.log(str.indexOf("#", 0))
const dStr = encoder.decode(str);
console.log(dStr)


function log(value, curr, timeFrame) {
    if (curr > timeFrame) {
        currentTime = 0;
        console.log(value)
    }
    curr++;
}
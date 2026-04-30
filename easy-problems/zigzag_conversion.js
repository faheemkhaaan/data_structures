/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows <= 1) return s;

    const result = Array.from({ length: numRows }).fill("")
    let currentRow = 0;
    let goingDown = true;
    for (let i = 0; i < s.length; i++) {


        if (currentRow === numRows - 1) {
            goingDown = false;
        }
        if (currentRow === 0) {
            goingDown = true;
        }

        result[currentRow] += s[i];

        if (goingDown) {
            currentRow += 1;
        } else {
            currentRow -= 1;
        }

    }
    return result.join("");
};

const s = "PAYPALISHIRING";

/**
 * P    A   H       N
 * A P  L S I  I    G
 * Y    I   R   
 * 
 * PAYPALISHIRING
 * 
 * PAHNAPLSIIGYIR
 */


const result = convert(s, 4);
console.log(result)
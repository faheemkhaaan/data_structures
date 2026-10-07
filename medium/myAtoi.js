
/**
 * 
 * @param {string} s 
 * @returns 
 */
function myAtoi(s) {

    function isNumeric(s) {
        const code = s.charCodeAt(0);
        return code >= 48 && code <= 57;
    }

    const trimedS = s.trim()
    let sign = 1;
    let num = 0;
    let canBeSkipped = false;
    // console.log(trimedS)

    for (let i = 0; i < trimedS.length; i++) {
        console.log(s[i])

        if (trimedS[i] === ' ') {
            console.log(`${s[i]} is space skipping.`)
            break;
        };

        if (canBeSkipped && trimedS[i] === "-") {
            break;
        }

        if (canBeSkipped && trimedS[i] === '+') {
            break;
        }
        if (s[i] === '-') {
            sign *= -1;
            canBeSkipped = true;
            continue;
        }

        if (s[i] === "+") {
            canBeSkipped = true;
            continue;
        }


        if (!isNumeric(s[i])) {
            console.log(`${s[i]} is not number`)
            break;
        }

        num = num * 10 + (s[i].charCodeAt(0) - 48);
        canBeSkipped = true
    }
    const result = num * sign;

    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;

    return num * sign;

};


const s = "   -042"
const result = myAtoi(s);


console.log(result)
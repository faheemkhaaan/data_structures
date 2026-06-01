


/**@param {number} x */
function palindromeNumber(x) {


    let reversed = 0
    const original = x
    while (x > 0) {
        const lastDigit = x % 10;
        reversed = (reversed * 10) + lastDigit
        x = Math.floor(x / 10);

    }
    return original === reversed
}

const num = 21212;
const result = palindromeNumber(num);
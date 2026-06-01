


/**@param {number} x */
function palindromeNumber(x) {


    const xStr = x.toString();
    let result = '';


    for (let i = xStr.length - 1; i >= 0; i--) {

        result += xStr[i];
    }

    return xStr === result

}

const num = 21212;
const result = palindromeNumber(num);
console.log(result);
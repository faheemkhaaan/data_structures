/**
 * 
 * @param {string} s 
 * @returns {string}
 */
function isValid(s) {

    const closingBrackets = ["}", ")", "]"];
    const openingBrackets = new Set(["{", "(", "["]);
    const stack = [];

    for (const char of s) {

        if (openingBrackets.has(char)) {
            stack.push(char)
        }

        switch (char) {
            case "}":
                const openingC = stack.pop();
                if (openingC !== "{") {
                    return false
                }
                break;
            case ")":
                const openingR = stack.pop();
                if (openingR !== "(") {
                    return false;
                }
                break;

            case "]":
                const openingS = stack.pop();
                if (openingS !== "[") {
                    return false;
                }
                break;
        }
    }
    return stack.length === 0;
};


const s = "({}[])";



const result = isValid(s);


console.log(result)


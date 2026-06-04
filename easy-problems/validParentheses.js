/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    const stack = [];

    const openingBrackets = new Set([
        '(', '[', '{'
    ]);
    const closingBracket = new Set([
        ')', ']', '}'
    ])
    const rules = {
        '(': ")",
        "[": ']',
        "{": "}"
    }
    let result = false;
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        const isOpeningBracket = openingBrackets.has(current);
        const isClosingBracket = closingBracket.has(current);

        if (isOpeningBracket) {
            stack.push(current);
        }
        if (isClosingBracket) {
            const top = stack.pop();
            if (rules[top] === current) {
                result = true;
            }
        }

    }
    return result;
};

const s = "[";

const result = isValid(s);

console.log(result);
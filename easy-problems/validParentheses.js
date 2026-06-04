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
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        const isOpeningBracket = openingBrackets.has(current);
        const isClosingBracket = closingBracket.has(current);

        if (isOpeningBracket) {
            stack.push(current);
        }
        if (isClosingBracket) {
            const top = stack.pop();
            if (rules[top] !== current) {
                return false;
            }
        }

    }
    return true;
};

const s = "()[]{}";

const result = isValid(s);

console.log(result);
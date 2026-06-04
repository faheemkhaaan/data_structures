
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    const stack = [];

    const rules = {
        '(': ")",
        "[": ']',
        "{": "}"
    }

    for (let i = 0; i < s.length; i++) {
        const current = s[i];

        if (current in rules) {
            stack.push(current);
        } else {
            const top = stack.pop();
            if (rules[top] !== current) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

const s = "([]"

const result = isValid(s);

console.log(result);
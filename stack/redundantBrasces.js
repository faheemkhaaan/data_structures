

/**
 * @param {string} s
 * @returns {0 | 1}
 */
function redundantBraces(s) {

    const stack = [];
    const oper = new Set(['+', '-', '*', '/'])
    for (const char of s) {
        if (char != ")") {
            stack.push(char);
        } else {
            let count = 0;
            while (stack[stack.length - 1] != "(") {
                let popped = stack.pop();
                if (oper.has(popped)) count += 1
            }
            if (count === 0) return 1;
        }
    }
    return 0
}


const s = "(a+b)";


const result = redundantBraces(s);

console.log(result)
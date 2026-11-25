

class Solution {
    /**
     * 
     * @param {string} path 
     */
    simplifyPath(path) {

        const stack = [];

        for (const dir of path.split('/')) {
            if (dir === "") {
                continue
            } else if (dir === '.') {
                continue;
            } else if (dir === '..') {
                if (stack.length > 0) {
                    stack.pop();
                } else {
                    continue;
                }
            } else {
                stack.push(dir);
            }
        }


        return "/" + stack.join("")
    }
}

const sol = new Solution()

const p1 = "/home/", p2 = "/../";

const result = sol.simplifyPath(p1);

console.log(result)

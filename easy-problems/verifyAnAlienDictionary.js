/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {

    const lexigraphicalOrder = new Map()

    for (let i = 0; i < order.length; i++) {
        lexigraphicalOrder.set(order[i], i);
    };

    function compare(first, second, order) {
        const length = Math.min(first.length, second.length)
        for (let i = 0; i < length; i++) {
            const firstChar = first[i];
            const secondChar = second[i];

            if (firstChar !== secondChar) {
                return order.get(firstChar) < order.get(secondChar);
            }
        }
        return first.length <= second.length;
    }
    for (let i = 0; i < words.length; i++) {

        const first = words[i];
        const second = words[i + 1];

        if (second) {
            console.log(second)
            if (!compare(first, second, lexigraphicalOrder)) {
                return false
            }
        }
    }
    return true;

};


const order = 'hlabcdefgijkmnopqrstuvwxyz';
const words = ["hello", "leetcode"];

const result = isAlienSorted(words, order);
console.log(result);
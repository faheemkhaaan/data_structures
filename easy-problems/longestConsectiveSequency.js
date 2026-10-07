
/**
* @param {number[]} nums
* @return {number}
*/
function longestConsecutive(nums) {



    const set = new Set(nums);
    let longest = 0;


    for (const num of nums) {

        if (!set.has(num - 1)) {
            let length = 0;

            while (set.has(num + length)) {
                length++;
                if (length > longest) {
                    longest = length
                }
            }
        }
    }

    return longest
}


const nums = [2, 20, 4, 10, 3, 4, 5];

const result = longestConsecutive(nums);

console.log(result)
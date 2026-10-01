





function topKFrequent(nums, k) {
    // const count = new Map();
    // const freq = []

    // for (let i = 0; i < nums.length; i++) {
    //     freq.push([])
    // }

    // // console.log(freq)
    // for (const n of nums) {
    //     count.set(n, (count.get(n) ?? 0) + 1)
    // }
    // // console.log(count) 

    // for (const [n, c] of count.entries()) {
    //     // console.log(freq[c])
    //     freq[c].push(n);
    // }
    // // console.log(freq)

    // const res = [];

    // for (let i = freq.length - 1; i > 0; i--) {
    //     const group = freq[i];
    //     // console.log(group)
    //     for (const n of group) {
    //         // console.log(n)
    //         res.push(n);
    //         if (res.length === k) {
    //             return res
    //         }
    //     }
    // }
    const count = new Map();
    const freq = []

    for (let i = 0; i < nums.length; i++) {
        freq.push([])
    }

    for (const n of nums) {
        count.set(n, (count.get(n) ?? 0) + 1)
    }

    for (const [n, c] of count.entries()) {
        freq[c].push(n);
    }

    const res = [];

    for (let i = freq.length - 1; i >= 0; i--) {

        for (const n of freq[i]) {
            res.push(n);
            if (res.length === k) {
                return res
            }
        }


    }
}
const nums = [1, 2, 2, 3, 3, 3, 3], k = 2;

// nums.fill([], 0, nums.length);
// console.log(nums)

const result = topKFrequent(nums, k);
console.log(result)
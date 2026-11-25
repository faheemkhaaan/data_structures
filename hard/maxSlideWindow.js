


function maxSlidingWindow(nums, k) {

    let list = [];
    let l = 0;

    for (let r = 0; r < nums.length; r++) {

        let length = r - l + 1;
        let maxElement = -Infinity;

        let i = l;
        while (i < k && i <= r) {
            console.log(i)
            if (nums[i] > maxElement) {
                maxElement = nums[i]
            };
            i++;
        }

        list.push(maxElement);

        if (length > k) {
            l++;
            list.shift()
        };


    }
    return list;
}


const nums = [1, 2, 1, 0, 4, 2, 6], k = 3;

const result = maxSlidingWindow(nums, k);

console.log(result)
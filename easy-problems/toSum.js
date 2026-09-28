function twoSum(nums, target) {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {

        const n = nums[i];
        const compliment = target - n;

        if (map.has(compliment)) {
            return [map.get(compliment), i]
        }

        map.set(n, i);
    }

    return []
}

const n = [3, 4, 5, 6], target = 7;

const result = twoSum(n, target);

console.log(result);


function lengthOfLongestSubstring(s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1

    let left = 0;
    let maxSubString = 0;
    const set = new Set();
    for (let right = 0; right < s.length; right++) {

        const slice = right - left + 1;
        if (slice > maxSubString) {
            maxSubString = slice
        }

        while (set.has(s[right])) {
            set.delete(s[left])
            left++;
        }

        set.add(s[right]);
    };

    return maxSubString;
};


const s = "tmmzuxt"
const result = lengthOfLongestSubstring(s);
console.log(result)
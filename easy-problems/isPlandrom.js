

function isPalindrome(s) {

    let left = 0;
    let right = s.length - 1;

    function isAlphanumric(s) {
        return /^[a-zA-Z0-9]+$/.test(s);
    }
    function isAlphanumeric(str) {
        return /^[a-zA-Z0-9]+$/.test(str);
    }

    while (left < right) {
        const sLeft = s[left];
        const sRight = s[right];

        if (!isAlphanumric(sLeft)) {
            left++
            continue;
        }

        if (!isAlphanumric(sRight)) {
            right--;
            continue
        }

        if (sLeft.toLowerCase() !== sRight.toLowerCase()) {
            return false;
        }
        left++;
        right--;

    }

    return true
};


const s = "Was it a car or a cat I saw?";
const result = isPalindrome(s);

console.log(result)
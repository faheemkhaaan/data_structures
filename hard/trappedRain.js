


function trap(height) {

    if (height.length === 0) return 0;

    let l = 0, r = height.length - 1;
    let maxLeft = height[l], maxRight = height[r];

    let res = 0;
    while (l < r) {

        if (maxLeft < maxRight) {
            l += 1;
            maxLeft = Math.max(maxLeft, height[l]);
            res += maxLeft - height[l];
        } else {
            r -= 1;
            maxRight = Math.max(maxRight, height[r]);
            res += maxRight - height[r];
        }
    }



    return res;
}






const height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];
const result = trap(height);

console.log(result)

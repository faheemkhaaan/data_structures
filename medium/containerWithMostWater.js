


function maxArea(heights) {

    let maxArea = -Infinity;

    let left = 0;
    let right = heights.length - 1;

    function calArea(left, right) {
        const width = right - left;
        const height = Math.min(heights[left], heights[right]);
        return width * height;
    }

    while (left < right) {

        const width = right - left;
        const height = Math.min(heights[left], heights[right]);

        const area = width * height;

        if (area > maxArea) {
            maxArea = area;
        }

        if (heights[left] > heights[right]) {
            right--
        } else {
            left++
        }



    }

    return maxArea;
}



const height = [1, 7, 2, 5, 12, 3, 500, 500, 7, 8, 4, 7, 3, 6]

const result = maxArea(height);

console.log(result)
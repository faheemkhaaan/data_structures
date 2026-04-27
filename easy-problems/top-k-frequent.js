


function topKFrequentElements(nums, k) {
    const result = new Map();
    const queue = new PriorityQueue((a, b) => { return a.value - b.value });

    for (let i = 0; i < nums.length; i++) {
        if (result.has(nums[i])) {
            result.set(nums[i], result.get(nums[i]) + 1);
        } else {
            result.set(nums[i], 1)
        }
    }

    for (const [key, value] of result.entries()) {
        queue.enqueue({ key, value });
        if (queue.size() > k) {
            queue.dequeue();
        }
    }
    return queue.array.map(a => a.key);
}

class PriorityQueue {

    constructor(compare) {
        this.array = [];
        this.compare = compare;
    }

    size() {
        return this.array.length;
    }
    toArray() {
        return [...this.array]
    }

    parent(index) {
        return Math.floor((index - 1) / 2)
    }

    left(index) {
        return (2 * index) + 1;
    }

    right(index) {
        return (2 * index) + 2;
    }

    swap(i, j) {
        [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
    }
    getMax() {
        return this.array[0]
    }

    enqueue(value) {

        this.array.push(value);
        this.bubbleUp(this.array.length - 1);

    }

    bubbleUp(index) {

        while (index > 0 && this.compare(this.array[this.parent(index)], this.array[index]) > 0) {
            this.swap(this.parent(index), index);
            index = this.parent(index);
        }
    }
    dequeue() {
        let arr = this.array
        if (this.array.length === 1) {
            return arr.pop()
        };

        let max = arr[0];
        this.array[0] = this.array.pop();
        this.sinkDown(0);
        return max;
    }
    sinkDown(index) {
        let leftChildIndex = this.left(index);
        let rightChildIndex = this.right(index);
        const n = this.array.length;

        let parent = index;

        if (leftChildIndex < n && this.compare(this.array[parent], this.array[leftChildIndex]) > 0) {
            parent = leftChildIndex;
        }
        if (rightChildIndex < n && this.compare(this.array[parent], this.array[rightChildIndex]) > 0) {
            parent = rightChildIndex;
        }

        if (parent !== index) {
            this.swap(index, parent);
            this.sinkDown(parent);
        }
    }
}

function heapSort(nums) {
    const heap = new PriorityQueue((a, b) => b - a);

    for (const num of nums) {
        heap.enqueue(num);
    }
    const sorted = [];

    while (heap.size() > 0) {
        sorted.push(heap.dequeue());
    }
    return sorted
}

const arr = [4, 2, 63, 2, 34, 5, 43, 6, 6, 7, 6, 8, 4, 3, 53, 4, 34, 53, 2];
const sorted = heapSort(arr);
// console.log(sorted);
const result = topKFrequentElements(arr, 3);

// console.log(result);

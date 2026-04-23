

/**
 * Fisher-Yates Shuffle to truly randomize an array
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function randomUnsortedArray(size = 100_000) {
    if (size > 100_000) size = 100_000;
    const array = [];
    for (let i = 0; i < size; i++) {
        const current = Math.floor(Math.random() * size * 10);
        array[i] = current;
    }
    return array;
}

function randomSortedArray(size = 100_000) {
    if (size > 100_000) size = 100_000;
    const array = []
    let current = 0
    for (let i = 0; i < size; i++) {
        current += Math.floor(Math.random() * i) + 6;
        array[i] = current;
    }
    return array;
}

function randomeSortedDuplicateArray(size = 100_000) {
    if (size > 100_000) size = 100_000;
    const array = [];


    let current = 10
    for (let i = 0; i < size; i++) {
        if (Math.random() > 0.9) {
            current += Math.floor(Math.random() * i) + 6;
        }
        array[i] = current;
    }
    return array;
}

function randomUnSortedDuplicateArray(size = 100_000) {
    if (size > 100_000) size = 100_000;
    let array = Array.from(randomeSortedDuplicateArray(size));
    // Step 2: Shuffle it to make it truly unsorted
    return shuffle(array);
}

function createHardTestCase(size = 100_000) {
    // Create an array with NO duplicates
    const arr = new Uint32Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = i;
    }
    // Manually put ONE duplicate at the very end
    arr[size - 1] = arr[size - 2];
    return arr;
}

const methods = {
    randomSortedArray,
    randomUnsortedArray,
    randomUnSortedDuplicateArray,
    randomeSortedDuplicateArray,
    createHardTestCase
}


module.exports = methods;








function romanToIntegers(s = "") {

    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]
    );

    let sum = 0;
    let i = 0;


    // for (let i = 0; i < romans.length; i++) {
    //     let current = map.get(romans[i]);
    //     let nextValue = map.get(romans[i + 1]);
    //     // if current is less than the next we subtract else we add
    //     if (nextValue && current < nextValue) {
    //         num.push(-current);
    //     } else {
    //         num.push(current)
    //     }
    // }

    while (i < s.length) {
        const cur = map.get(s[i]);
        const next = map.get(s[i + 1]);
        if (next && cur < next) {
            sum += (next - cur);
            i += 2;
        } else {
            sum += cur;
            i += 1;

        }
        console.log({ cur, next, sum })

    }
    return sum
}

// MDXLI  = 1000 + 500 + 10 - 50 + 1 = 1541
const sum = romanToIntegers("MCMXCIV");
// 1000 + (1000-100) + (100-10) + (5-1) = 1000 + 9000 + 90 + 4 = 1994
// expected 1994
console.log(sum)
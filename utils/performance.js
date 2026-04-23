



function perf(fun, label) {
    console.time(label);
    console.log(fun())
    console.timeEnd(label)
}

module.exports = { perf };
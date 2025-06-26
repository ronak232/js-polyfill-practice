Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue || undefined;
    if (this.length === 0) {
        return undefined;
    }

    if (typeof cb !== "function") {
        throw new TypeError("Callback function is not defined ");
    }

    for (let num of this) {
        if (accumulator) {
            accumulator = cb(accumulator, num, this)
        }

        else {
            accumulator = num;
        }
    }
    return accumulator;
}

const arr = [];
const res = arr.myReduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("res ", res)
Array.prototype.myMap = function (cb) {

    // this --> is actually array
    console.log("this ", this)

    if (typeof cb !== "function") {
        throw new TypeError("Callback function is not a function")
    }

    if (this === null) {
        throw new Error("array is null or undefined");
    }
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp;
}

const arr = [1, 2, 3];
const res = arr.myMap((value) => {
    return value * 2
})
console.log(res)
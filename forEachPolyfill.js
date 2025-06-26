let arr = [1,2,3,4];

arr.forEach((item, index, arr) => {
    console.log(item * 2);
})

Array.prototype.myForEach = function (cb) {
    if(this.length === undefined) {
        throw new Error("Array is undefined");
    }

    if(typeof cb !== "function") {
        throw new TypeError("Callback function is not of type function");
    }

    let result;
    for(let i = 0; i < this.length; i++) {
        result = cb(this[i], i, this);
    }
    console.log("Arr item ", result)
}
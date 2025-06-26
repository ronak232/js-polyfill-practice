Array.prototype.myFilter = function (cb) {
    if(this === null) {
        throw new Error("array is null or undefined");
     }
     let temp = [];
     for(let i = 0; i < this.length; i++) {
        temp.push(cb(this[i] , i, this))
     }
     return temp;
}

const arr = [2,4,5];
const res = arr.myFilter((value) => {
    return value % 2 === 0;
})
console.log(res)
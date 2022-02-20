let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"

String.prototype.removeDuplicate = function() {
    let arr = this.split(' ');
    let result = [];

    for (let i of arr) {
        if (result.indexOf(i) == -1) {
            result.push(i);
        } 
    }
    return result.join(' ');
}


console.log(x.removeDuplicate());    // Int32 Double  
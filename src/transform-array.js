module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw 'Not array';
    let res = []
    for( let i=0; i < arr.length;i++) {
        if (arr[i]== "--discard-next") {
            i++
        } else if (arr[i]== "--discard-prev") {
            if (arr[i-1] || arr[i-1] == 0) {
                res.pop()
            }
        } else if (arr[i]== "--double-next") {
            if (arr[i+1] || arr[i+1] == 0) {
            res.push(arr[i+1]);
            res.push(arr[i+1]);
            i++}
        } else if (arr[i]== "--double-prev") {
            if (arr[i-1] || arr[i-1] == 0) {
                res.push(arr[i-1])
            }
        } else {
            res.push(arr[i])
        }

    }
    return res
};

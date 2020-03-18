module.exports = class DepthCalculator {
    calculateDepth(arr, step = 1) {
        let counter = step
        let res
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                res = this.calculateDepth(arr[i], step + 1)
                if (res > counter) {
                    counter = res
                }
            }
        }
        return counter
    };
}
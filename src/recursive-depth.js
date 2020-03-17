module.exports = class DepthCalculator {
    calculateDepth(arr, step=1) {
        for (let i=0; i<arr.length;i++) {
            if (Array.isArray(arr[i])) {
                console.log('step',step)
                step = this.calculateDepth(arr[i],step+1);
            } else if (i === arr.length-1) {
                return step;
            }
        };
    }
}
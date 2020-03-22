const chainMaker = {
    arr: [],
    
    getLength() {
      return this.split("~~").length
    },

    addLink(value) {
      if (value === null) {
        this.arr.push("null")
      }
      else if (arguments.length) {
        this.arr.push(value)
      } else {
        this.arr.push(" ")
      }
      return this
    },

  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position < this.arr.length) {
      this.arr.splice(position-1,1)
    return this
    } else {
      this.arr = [];
      throw "Error"
    }
  },

  reverseChain() {
    this.arr.reverse()
    return this
  },

  finishChain() {
    let res = "( " + this.arr.join(" )~~( ") + " )";
    this.arr = [];
    return res
  }

};

module.exports = chainMaker;
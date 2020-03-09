module.exports = function countCats(arr) {
  let count = 0
  arr.forEach(e => {
    e.forEach(e => {
      if (e == "^^") {
        count += 1
      }
    })
  })
  return count
};
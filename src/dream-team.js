module.exports = function createDreamTeam(str) {
  if (!Array.isArray(str)) return false
  let res = [];
  str.forEach( (e) => {
    if (typeof e == "string") {
      for (let i=0; i<e.length;i++) {
        if (e[i] != " ") {
          res.push(e[i].toUpperCase())
          break
        }
      }

    } else return false

  })
 return res.sort().join("")
}
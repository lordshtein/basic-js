const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "nubmer" || typeof sampleActivity === "string") {
    let act = parseFloat(sampleActivity)
    if (act <= 15 && act > 0) {
      let age = Math.log(MODERN_ACTIVITY / act) / 0.693 * HALF_LIFE_PERIOD
      return Math.ceil(age)
    } else
      return false
  } else
    return false
};
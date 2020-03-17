module.exports = function getSeason(date) {
  if (date) {
    let month=date.toDateString().split(' ')[1]
    console.log(month)
  if (month == "Jan" || month == "Feb" || month == "Dec") {
    return "winter"
  } else if (month == "Mar" || month == "Apr" || month == "May") {
    return "spring"
  } else if (month == "Jun" || month == "Jul" || month == "Aug") {
    return "summer"
  } else if (month == "Sep" || month == "Oct" || month == "Nov") {
    return "fall"
  } 
};
return "Unable to determine the time of year!"
};

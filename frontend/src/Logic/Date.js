const return_Date = (dateNeeded) => {
  if (dateNeeded === 0 || !dateNeeded) return "???";
  var return_str = "";
  if (dateNeeded.getDate() < 10) {
    return_str += "0" + dateNeeded.getDate() + "/";
  } else {
    return_str += dateNeeded.getDate() + "/";
  }
  if (dateNeeded.getMonth() < 10) {
    return_str += "0" + (parseInt(dateNeeded.getMonth()) + 1) + "/";
  } else {
    return_str += parseInt(dateNeeded.getMonth()) + 1 + "/";
  }
  return return_str + dateNeeded.getFullYear();
};

const reverse_Date = (date) => {
  // type: DD/MM/YYYY -> instanceof Date
  if (!(typeof date === "string")) {
    return false;
  }
  var splitted = date.split("/");
  var day, month, year;
  try {
    day = parseInt(splitted[0]);
    month = parseInt(splitted[1]);
    year = parseInt(splitted[2]);
    if (
      day <= 0 ||
      day > 31 ||
      month <= 0 ||
      month > 12 ||
      year < 2023 ||
      year > 2100
    ) {
      return false;
    }
    return new Date(year, month - 1, day);
  } catch (err) {
    return false;
  }
};


export { return_Date, reverse_Date };

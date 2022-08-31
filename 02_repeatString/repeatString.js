const repeatString = function (str, num) {
  let count = 0,
    res = '';
  while (count < num) {
    res += str;
    count++;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;

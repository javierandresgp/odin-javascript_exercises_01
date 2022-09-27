const repeatString = function (str, num) {
  if (num < 0) return 'ERROR';
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

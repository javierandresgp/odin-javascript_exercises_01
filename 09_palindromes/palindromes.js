const palindromes = function (str) {
  const formatted = str.toLowerCase().replace(/[!.,\s]/g, '');
  const reversed = formatted.split('').reverse().join('');
  if (reversed === formatted) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;

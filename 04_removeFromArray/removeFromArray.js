const removeFromArray = function (...args) {
  const arr = args[0];
  for (const [i, arg] of args.entries()) {
    if (i > 0) {
      const exists = arr.includes(arg);
      if (exists) {
        const idx = arr.indexOf(arg);
        arr.splice(idx, 1);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

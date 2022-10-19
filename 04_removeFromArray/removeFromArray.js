const removeFromArray = function (...args) {
  const arr = args[0];
  for (const [i, arg] of args.entries()) {
    if (i > 0) {
      const exists = arr.includes(arg);
      if (exists) {
        const removed = arr.splice(i, 1);
        console.log('removed:', removed);
      }
    }
  }
  console.log('arr:', arr);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

const fibonacci = function (n) {
  const member = +n;
  if (member < 0) return 'OOPS';
  if (member === 1 || member === 2) return 1;
  const members = [1, 1];
  for (let i = 2; i < member; i++) {
    const previous = members[i - 2];
    const next = members[i - 1];
    members.push(previous + next);
  }
  return members[member - 1];
};

// Do not edit below this line
module.exports = fibonacci;

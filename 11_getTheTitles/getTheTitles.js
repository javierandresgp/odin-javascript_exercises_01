const getTheTitles = function (arrOfObjs) {
  const arr = [];
  arrOfObjs.forEach((obj) => {
    arr.push(obj.title);
  });
  return arr;
};

// Do not edit below this line
module.exports = getTheTitles;

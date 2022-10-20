const findTheOldest = function (arrOfObjs) {
  let oldest = 0,
    person = null;
  arrOfObjs.forEach((obj) => {
    let old = null;
    if (obj.yearOfDeath) old = obj.yearOfDeath - obj.yearOfBirth;
    else {
      const today = new Date();
      const year = today.getFullYear();
      old = year - obj.yearOfBirth;
    }
    if (old > oldest) {
      oldest = old;
      person = obj;
    }
  });
  return person;
};

// Do not edit below this line
module.exports = findTheOldest;

const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr))
    return false;
  
  let resultArr = '';

  arr.forEach(function (item) {
    if (typeof item !== 'string')
      return false;
    else
      resultArr += item.trim()[0].toUpperCase();
  });

  return resultArr.split('').sort().join('');
};
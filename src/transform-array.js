const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  console.log();
  if(!Array.isArray(arr)) {
    throw new Error;
  }
  if(arr.length === 0) {
    return arr;
  }

  let arrResult = [];
  let arrCopy = arr;

  for(let i = 0; i < arrCopy.length; i++) {

    if (arrCopy[i] === '--discard-prev') {
      if(arrCopy[i - 1])
        arrCopy[i - 1] = 'blabla';
      arrCopy[i] = 'blabla';
      continue;

    } else if (arrCopy[i] === '--discard-next') {
      if (arrCopy[i + 1])
        arrCopy[i + 1] = 'blabla';
      arrCopy[i] = 'blabla';
      continue;

    } else if (arrCopy[i] === '--double-next') {
      if(arrCopy[i + 1])
        arrCopy[i] = arrCopy[i + 1];
      continue;

    } else if (arrCopy[i] === '--double-prev') {
      if(arrCopy[i - 1])
        arrCopy[i] = arrCopy[i - 1];
      continue;
    } else {
      continue;

    }
  }

  for (let i = 0; i < arrCopy.length; i++) {
    if(arrCopy[i] !== 'blabla')
      arrResult.push(arrCopy[i]);
  }
  return arrResult;
};
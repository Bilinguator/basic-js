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
  let arrCopy = [];

  for(let i = 0; i < arr.length; i++) {
    arrCopy[i] = arr[i];
  }

  

  for(let i = 0; i < arrCopy.length; i++) {

    if (arrCopy[i] === '--discard-prev') {
      if(i !== 0)
        arrCopy[i - 1] = 'blabla';
      arrCopy[i] = 'blabla';
      continue;

    } else if (arrCopy[i] === '--discard-next') {
      if (i !== arrCopy.length - 1)
        arrCopy[i + 1] = 'blabla';
      arrCopy[i] = 'blabla';
      continue;

    } else if (arrCopy[i] === '--double-next') {
      if (i !== arrCopy.length - 1)
        arrCopy[i] = arrCopy[i + 1];
      continue;

    } else if (arrCopy[i] === '--double-prev') {
      if(i !== 0)
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

/*  let arrResult = [];
  let index = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-prev') {
      if (index !== 1)
        arrResult.pop();
      index = 0;
    } else if (arr[i] === '--discard-next') {
      i++;
      index = 1;
    } else if (arr[i] === '--double-next') {
      if (i !== arr.length - 1)
        arrResult.push(arr[i + 1]);
      index = 0;
    } else if if (arr[i] === '--double-prev') {
      if (i !== 0)
        arrResult.push(arr[i - 1]);
      index = 0;
    } else {
      arrResult.push(arr[i]);
      index = 0;
    }
  }

  return arrResult;*/
};
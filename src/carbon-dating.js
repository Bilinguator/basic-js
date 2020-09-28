const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if((typeof sampleActivity) !== 'string')
    return false;
  
  let num = Number(sampleActivity);

  if(isNaN(num) || num > 15 || num <= 0)
    return false;
  
  const MODERN_ACTIVITY = 15;
    return (Math.log(MODERN_ACTIVITY - sampleActivity)) / (0.000122);
};
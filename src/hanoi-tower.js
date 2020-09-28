const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let turnsSpeedInSeconds = turnsSpeed / 3600;
  let seconds = Math.floor(turns / turnsSpeedInSeconds);
  return {turns: turns, seconds: seconds}
};

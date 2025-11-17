// Because we are human, we want the result temperature to be rounded to one decimal place: 

const convertToCelsius = function(temp) {
  // fahrenheit to celsius
  // x °F ≘ (x − 32) × ⁠5/9°C
  let result = (temp - 32) * (5/9);
  return Math.round(result * 10) / 10
};

const convertToFahrenheit = function(temp) {
  // celsius to fahrenheit
  // x °C ≘ (x × ⁠9/5⁠ + 32) °F
  let result = (temp * 9/5 + 32)
  return Math.round(result * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

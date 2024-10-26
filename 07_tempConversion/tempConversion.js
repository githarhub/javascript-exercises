const convertToCelsius = function(fahrenheit) {
  const unroundedCelsius = (fahrenheit - 32) * (5/9);
  const roundedCelsius = roundDecimal(unroundedCelsius);
  return roundedCelsius;
};

const convertToFahrenheit = function(celsius) {
  const unroundedFahrenheit = ((celsius * (9/5)) + 32);
  const roundedFahrenheit = roundDecimal(unroundedFahrenheit);
  return roundedFahrenheit;
};


function roundDecimal(decimal){
   const roundedIntegerNumber = Math.round(decimal * 10);
   const roundedDecimalNumber = roundedIntegerNumber / 10;
   return roundedDecimalNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

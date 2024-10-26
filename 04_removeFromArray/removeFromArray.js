const removeFromArray = function(inputArray, ...removeNumber) {
    
    const removedArray = inputArray.filter(currentNumber => checkNumber(currentNumber, removeNumber));
    return removedArray;
};
function checkNumber(inputNumber, removeNumber) {
    for (const number of removeNumber) {
        if (inputNumber === number) {
            return false;
        };
    };
    return true;
};
// Do not edit below this line
module.exports = removeFromArray;

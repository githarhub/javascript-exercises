const sumAll = function(startNumber, endNumber) {

    if (validNumber(startNumber, endNumber) === false) {
        return "ERROR";
    }
    else if (endNumber < startNumber) {
        let bufferNumber = startNumber;
        startNumber = endNumber;
        endNumber = bufferNumber;
    };
    return sumNumber(startNumber, endNumber);

};

function sumNumber(startNumber, endNumber) {
    let summedNumber = 0;
    for(let i = startNumber; i <= endNumber; i++) {
        summedNumber += i;
    }

    return summedNumber;
} 

function validNumber (firstInput, secondInput) {
    if (Number.isInteger(firstInput) && Number.isInteger(secondInput)) {
        if (firstInput < 0 || secondInput < 0) {
            return false;
        }
        return true;
    };

    return false;
}


// Do not edit below this line
module.exports = sumAll;

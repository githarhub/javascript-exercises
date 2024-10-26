const sumAll = function(startNumber, endNumber) {
    return sumNumber(startNumber, endNumber)

};

function sumNumber(startNumber, endNumber) {
    let summedNumber = 0;
    for(let i = startNumber; i <= endNumber; i++) {
        summedNumber += i;
    }

    return summedNumber;
} 

// Do not edit below this line
module.exports = sumAll;

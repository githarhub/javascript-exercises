const fibonacci = function(number) { 

    number = parseInt(number);

    if (number < 0) {
        return "OOPS"
    }

    if (number == 0) {
        return 0;
    }

    
    let total = 1;
    let firstNumber = 1;
    let secondNumber = 0;

    for (let i = 1; i < number; i++) {
        total = firstNumber + secondNumber;
        buffer = firstNumber;
        firstNumber = total;
        secondNumber = buffer;
    }

    return total;

};

// Do not edit below this line
module.exports = fibonacci;

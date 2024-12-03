const palindromes = function (text) {

    const onlyChar = text.toLowerCase().replaceAll(/[^a-z0-9]/g, "").split("");

    const reversedOnlyChar = onlyChar.slice().reverse();


    return onlyChar.every( (element, index)  => {

        return element === reversedOnlyChar[index]

    })

};

// Do not edit below this line
module.exports = palindromes;

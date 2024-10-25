const reverseString = function(text = "") {

    const notReverse = text.split("");
    const reverse = notReverse.reverse().join("");
    return reverse.toString();
};

// Do not edit below this line
module.exports = reverseString;

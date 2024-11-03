const repeatString = function(text, times) {
    let repeatText = "";
    if (times < 0) {
        return "ERROR";
    }
    for (let i = 0; i < times; i++) {
        
        repeatText += text;
    }
    return repeatText;
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function(string) {
    let wordArray = [];
    const stringLength = string.length;
    let reversedString = "";
    for(let i = 0; i < stringLength; i++){
        wordArray[i] = string.charAt(i);
    }
    for(let i = stringLength - 1; i >= 0; i--){
        reversedString+= wordArray[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

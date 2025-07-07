/*
const repeatString = function() {

};
*/

function repeatString(string, numOfRepeats){
    let stringRepeated = "";
    if (numOfRepeats < 0)
        return "ERROR";
    for (let i = 0; i < numOfRepeats; i++){
        stringRepeated = stringRepeated + string;
    }
    return stringRepeated;
}

// Do not edit below this line
module.exports = repeatString;

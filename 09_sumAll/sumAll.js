const sumAll = function(int1, int2) {
    if (Number.isInteger(int1) == false || Number.isInteger(int2) == false){
        return "ERROR";
    }
    let intAddedUp = 0;
    let bigInt = Math.max(int1, int2);
    let smallInt = Math.min(int1, int2);

    while(smallInt <= bigInt){
        intAddedUp += smallInt;
        smallInt++;
    }
    return intAddedUp;
}

// Do not edit below this line
module.exports = sumAll;

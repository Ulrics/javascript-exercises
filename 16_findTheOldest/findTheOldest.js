const findTheOldest = function(arrayArg) {
    return arrayArg.reduce(oldest);

    function oldest(oldest, current){
        const date = new Date();
        const currentYear = date.getFullYear();

        let oldestAge;
        let currentAge;

        if (current.yearOfDeath === undefined){
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
            currentAge = currentYear - current.yearOfBirth;
        }
        else if(oldest.yearOfDeath === undefined){
            oldestAge = currentYear - oldest.yearOfBirth;
            currentAge = current.yearOfDeath - current.yearOfBirth;
        }
        else{
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
            currentAge = current.yearOfDeath - current.yearOfBirth;
        }

        if (currentAge > oldestAge) {
            return current;
        } 
        else {
            return oldest;
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;

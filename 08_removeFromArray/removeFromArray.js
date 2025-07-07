const removeFromArray = function(array, ...argToRemove) {
    let arrayItemsRemoved = array.filter(function(item) {
        for (let i = 0; i < argToRemove.length; i++){
            if (argToRemove[i] === item){
                return false;
            } 
        }
        return true;
    });
    return arrayItemsRemoved;
};

/*
 return array.filter(isMatch)
    
    for (let i = 0; i < array.length; i++)
*/

// Do not edit below this line
module.exports = removeFromArray;

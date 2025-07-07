const getTheTitles = function(arrayArg) {
    const titles = arrayArg.map(getTitle);

    function getTitle(arg){
        return arg.title;
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

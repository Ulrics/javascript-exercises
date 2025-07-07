const fibonacci = function(num) {   
    num = parseInt(num);
    if (num === 1 || num === 0){
        return num;
    }
    if (num < 0) {
        return "OOPS";
    }
    else{
        let accumulator = 1;
        let nextSequence = 1;
        let lastSequence = 0;
        
        let i = 2;
        while (i < num + 1){
            accumulator = lastSequence + nextSequence;
            lastSequence = nextSequence;
            nextSequence = accumulator;
            i++;
        }
        return accumulator;
    }
};

console.log(fibonacci(-25));
// Do not edit below this line
module.exports = fibonacci;

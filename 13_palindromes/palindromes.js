const palindromes = function (string) {
    const lowercase = string.toLowerCase();
    let removedSpaces = lowercase.replaceAll(" ","");
    let stringArray = removedSpaces.split("");
    
    function removePunctuation(string){
        if (string !== "!" && string !== "?" 
            && string !== "." && string !== ","){
                return true;
        }
        return false;
    }
    stringArrayNoPunc = stringArray.filter(removePunctuation);
    const originalString = stringArrayNoPunc.join("");
    const reverseString = originalString.split("").reverse().join("");
    
    if(originalString === reverseString){
        return true;
    }
    else{
        return false;
    }
};

console.log(palindromes('r3ace3car'));

// Do not edit below this line
module.exports = palindromes;

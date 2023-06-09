const reverseString = function(string) {
    word = "";

    for(i=0;i<string.length;i++){
        word = word.concat(string.slice(string.length -1 -i,string.length - i))
    }
    return word;
};

// Do not edit below this line
module.exports = reverseString;

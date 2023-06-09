const repeatString = function(string, num) {
    word = "";

    if(num<0){
        return "ERROR";
    }
    else{
        for(i=0;i<num;i++){
            word = word.concat(string) 
        }
        return word;
    }
};


// Do not edit below this line
module.exports = repeatString;

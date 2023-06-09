const sumAll = function(num1,num2) {
    if(num1 < 0 || num2 < 0){
        return 'ERROR';
    }
    if((Number.isInteger(num1) != true) || (Number.isInteger(num2) != true)){
        return 'ERROR';
    }
    if(num2>num1){
        j = num2 - num1;
        sum = 0;
        for(i=0;i<j+1;i++){
            sum = sum + (num2 - i);
        }
        return sum;
    }
    if(num2<num1){
        j = num1 - num2;
        sum = 0;
        for(i=0;i<j+1;i++){
            sum = sum + (num1 - i);
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;

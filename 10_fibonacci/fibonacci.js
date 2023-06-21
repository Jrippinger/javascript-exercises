const fibonacci = function(x) {
    
    if(typeof x =="string"){
        x = parseInt(x)
    }
    if(x < 0){
        return("OOPS")
    }
    
    n = 0
    n1 = 1
    n2 = 1

    if((x == 1) || (x == 2)){
        return(1)
    }
    else{
        for(i=0;i<x-2;i++){
            n = n1 + n2
            n2 = n1
            n1 = n
        }
        return(n)
    }
};

// Do not edit below this line
module.exports = fibonacci;

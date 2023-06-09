const removeFromArray = function(array, ...args) {
    for(i=0;i<array.length;i++){
        for(let n of args){
            if(array[i] === n || array[i] == n){
                array.splice(i,1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

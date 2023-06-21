const findTheOldest = function(arr) {
    
    age = 0
    date = new Date()
    
    for(i=0;i<arr.length;i++){
        
        if(arr[i].hasOwnProperty('yearOfDeath') == false){
            temp = date.getFullYear() - arr[i].yearOfBirth

            if(temp > age){
                age = temp
                old = arr[i]
            }
        }
        else{
            temp = arr[i].yearOfDeath - arr[i].yearOfBirth

            if(temp > age){
                age = temp
                old = arr[i]
            }
        }
    }
    return(old)
}


// Do not edit below this line
module.exports = findTheOldest;

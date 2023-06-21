const palindromes = function (str) {
    str = str.toLowerCase()
    str = str.replace(/[&\/\\#,+()$~%.'":*?!<>{} ]/g, '')
    let x = ""

    for(i=0;i<str.length;i++){
        x = x + str.substring(str.length - i -1, str.length -i) 
    }

    if(str == x){
        return(true)
    }
    else{
        return(false)
    }
};

// Do not edit below this line
module.exports = palindromes;

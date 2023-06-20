const add = function(a, b) {
  return(a+b)
};

const subtract = function(a, b) {
	return(a-b)
};

const sum = function(arr) {
    let x = 0
    for(i=0;i<arr.length;i++){
      x += arr[i]
    }
    return(x)
};

const multiply = function(arr) {
  let x = 1
  if(arr.length == 0){
    x = 0
    return(x)
  }
  else{
    for(i=0;i<arr.length;i++){
      x *= arr[i]
    }
    return(x)
  }
};

const power = function(a,b) {
  return(a ** b)
};

const factorial = function(x) {
  total = 1
  if(x == 0){
    return(1)
  }
  else{
    for(i=x;i>0;i--){
      total *= i
    }
    return(total)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

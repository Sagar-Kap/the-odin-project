const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(array) {
  let sum= 0;
  for (let i=0 ; i<array.length; i++){
    sum += array[i];    
  }
  return sum;
};

const multiply = function(array) {
  let multiple= 1;
  for (let i=0 ; i<array.length; i++){
    multiple = multiple*array[i];    
  }
  return multiple;      
};

const power = function(a, b) {
    let power =1;
    for (let i=1;i<=b;i++){
      power =power*a;
    }
    return power;
};

const factorial = function(a) {
  let power =1;
  for (let i=1;i<=a;i++){
    power =power*i;
  }
  return power;  
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

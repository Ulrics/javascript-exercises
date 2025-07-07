const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((a,b)=> a + b, 0);
};

const multiply = function(array) {
  return array.reduce((a,b)=> a * b, 1);
};

const power = function(x,y) {
	let i = 1;
  let total = x;
  while (i < y){
    total = total * x;
    i++;
  }
  return total;
};

const factorial = function(x) {
	let i = 1;
  let total = 1;
  while (i <= x){
    total *= i;
    i++;
  }
  return total;
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

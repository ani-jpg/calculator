function add (a,b) {
    return a+b; 
    
    };

console.log(add(1,2));

function subtract(a, b) {
	return a - b;
};

console.log(subtract(3,1));

function multiply(a,b) {
    return a * b;
  };

  console.log(multiply(3,4));

function divide(a,b) {
    return a / b;
}

console.log(divide(12,6));

var firstNum;
var secondNum;
var operator;

function operate(a, operator, b) {
    if (operator=='+') {
        add (a, b);
    }
}

console.log(operate(1,'+',3));


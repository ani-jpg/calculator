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

var operator;

function operate(a, operator, b) {
    if (operator=='+') {
        add (a, b);
    }
}

console.log(operate(1,'+',3));

const buttons= document.querySelectorAll('button');
const display= document.querySelector('#display');

function calcDisplay() {
buttons.forEach((button)=> { button.addEventListener ('click', () => {
    console.log(button.id);
    display.textContent= button.id;
})
})
};

calcDisplay();

const numberBtns= document.querySelectorAll('.number-btn')
const operatorBtns=document.querySelectorAll('.operator-btn')
console.log(operatorBtns);

function add (a,b) {
    return a+b; 
    
    };
function math() {
let result= '';
    buttons.forEach((button)=> {button.addEventListener ('click', () => {
        let total= 0;
    
            if (button.classList=='number-btn') {
                result += button.id;
                display.textContent=result;
                return result;
                //need to store the variable- done, its stored as result 
            }
            
            if (button.classList=='operator-btn') {
                //store number as operator & if next is also a numb then you execute func of operator
                console.log(+result, button.id);
                total= add (+result, total);
                result = ' ';
            }
            console.log(total, 'ayo');
            return total;
    
    })  
    })
    
};

math ();

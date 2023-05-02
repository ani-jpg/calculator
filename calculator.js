//Math functions
function add (a,b) {
    return a+b; 
    };

function subtract(a, b) {
	return a - b;
};

function multiply(a,b) {
    return a * b;
  };

function divide(a,b) {
    return a / b;
}

//Calculator math & display
const buttons= document.querySelectorAll('button');
const display= document.querySelector('#display');

let total;
let operator='lalalalala';
let x;
let y;



function math() {
let result= '';
    buttons.forEach((button)=> {button.addEventListener ('click', () => {
            if (button.classList=='number-btn') {
                result += button.id;
                if (isNaN(total)) {
                    display.textContent= result;
                }
                else {
                    display.textContent= y + result;
                }
                return result;
                
            }

            if (operator=='add') {
                total= add (+result, total);
            }
            else if (operator=='subtract') {
                total= subtract(total, +result)
            }
            else if (operator=='multiply') {
                if (result==0) {
                    total= multiply(1, total);
                }
                else {
                    total= multiply(+result, total);
                }
            }
        
            
            if (button.classList=='operator-btn') {
                console.log(total, 'start');
                if (button.id=='+') {
                    operator='add';
                    x= '+';
                }
            
                else if (button.id=='-') {
                    operator='subtract';
                    x= '-';
                }
            
                else if (button.id=='x') {
                    operator='multiply';
                    x= 'x';
                }
                
                else if (button.id=='equal') {
                    x= '=';
                }

                    if (isNaN(total)) {
                        total= +result;
                        y= total + "   " + x;
                    }
                    else {
                        if (x=='=') {
                            y= y + "   " + result + "   " + x + "   " + total;
                        }
                        else {
                            y= y + "   " + result + "   " + x;
                        }
                        
                    }
                display.textContent= y;
                result = ' ';
            }

            return total;
    })  
    })
    
};
math ();

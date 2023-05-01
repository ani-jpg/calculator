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

function math() {
let result= '';
    buttons.forEach((button)=> {button.addEventListener ('click', () => {
            if (button.classList=='number-btn') {
                result += button.id;
                display.textContent=result;
                console.log(result);
                return result;
            }
            
            if (operator=='add') {
                total= add (+result, total);
            }
            else if (operator=='subtract') {
                total= subtract(total, +result)
            }
            else if (operator=='multiply') {
                total= multiply(+result, total);
            }
            
            console.log(total, 'after');
        
            
            if (button.classList=='operator-btn') {
                display.textContent=total + "   " + button.id;
                if (button.id=='+') {
                    operator='add';
                }
    
                else if (button.id=='-') {
                    operator='subtract'
                }
    
                else if (button.id=='x') {
                    operator='multiply';
                }
                
                else if (button.id=='equal') {
                    total=total;
                    display.textContent=total;
                }

                if (isNaN(total)) {
                    total= +result;
                    display.textContent=button.id;
                }
                result = ' ';
            }

            return total;
    })  
    })
    
};

math ();

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
console.log(buttons);
const display= document.querySelector('#display');

let total;
let operator;
let x;
let y;
let numbDisplay;

function math() {
let result= '';
buttons.forEach((button)=> {button.addEventListener ('click', () => {
    if (button.classList=='number-btn') {
                result += button.id;
                if (isNaN(total)) {
                    display.textContent= result;
                }
                else {
                    numbDisplay= y+result;
                    display.textContent= numbDisplay;
                }
                return result;
            }

            if (operator!='equal') {
                if (button.id=='backspace') {
                    y = y.substring(0, numbDisplay.length-1);
                    display.textContent=y;
                    result= ' ';
                }
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
                if (button.id=='+') {
                    operator='add';
                    x= '+';
                }
            
                else if (button.id=='-') {
                    operator='subtract';
                    x= '-';
                }
            
                else if (button.id=='*') {
                    operator='multiply';
                    x= 'x';
                }
                
                else if (button.id=='equal') {
                    operator='equal';
                    x= '=';
                }

                else if (button.id=='%') {
                    if (isNaN(total)) {
                        total= +result/100;
                    }
                    else {
                        result= total;
                        total= total/100;
                    }
                    x= '/100';
                    console.log(total);
                    
                }

                    if (isNaN(total)) {
                        total= +result;
                        y= total + "   " + x;
                    }

                    else {
                        if (x=='=') {
                            y= y + "   " + result + "   " + x + "   " + total;
                        }
                        else if (x=='/100') {
                            y= result + "   " + x + "   " + "=" + "   " + total;
                        }
                        else {
                            y= y + "   " + result + "   " + x;
                        }
                    
                    }
                display.textContent= y;
                result = ' ';
            }

            if (button.id=='clear') {
                total= NaN;
                x='';
                y='';
                operator='';
                result=' ';
                display.textContent=y;
            }
            return total;
    })  
    })
};


//Keyboard functionality 
document.addEventListener('keydown', (keyValue) => {
    let key= keyValue.key.match(/[0-9.*+-]/g);
    let button = document.querySelector(`button[id="${key}"]`);
        if (keyValue.key=='Enter') {
            button= document.querySelector(`button[id="${'equal'}"]`);
        }
        if (keyValue.key=='Backspace') {
            button= document.querySelector(`button[id="${'backspace'}"]`);
        }

        if (keyValue.key=='%') {
            button= document.querySelector(`button[id="${'%'}"]`);
            console.log(button, '%%%');
        }
    
button.click();

})

math ();

//lots of errors in the code like when u click CE the keyboard dont work properly and the backspace dont work and the equals dont work and so much lol
//not sure how to mimick the hover and click effect with keyboard 
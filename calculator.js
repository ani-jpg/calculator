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
const equalDisplay= document.querySelector('#equal-display');

let total;
let operator;
let x, y, z;
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
                    
                        if (operator=='add') {
                            total= add (+result, total);
                        }
                        else if (operator=='subtract') {
                            total= subtract(total, +result)
                        }
                        else if (operator=='multiply') {
                            if (result==' ') {
                                total= multiply(1, total);
                            }
                            else {
                                total= multiply(+result, total);
                            }
                        }
                    
                    z="=" + "   " + total;
                    equalDisplay.textContent=z;
                }
                return result;
            }
            
            if (button.id=='backspace') {
                console.log(y);
                y = y.substring(0, numbDisplay.length-1);
                numbDisplay=y;
                display.textContent=y;
                console.log(result);
                    if (operator=='add') {
                        total= subtract (total, +result);
                    }
                    else if (operator=='subtract') {
                        total= add(total, +result)
                    }
                    else if (operator=='multiply') {
                        if (total==0) {
                            total= +result;
                        }
                        else {
                            total= divide(total, +result);
                        }
                    }
                result= ' ';
                console.log(total);
                return y;
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
                    x= '/100'
                    
                }

                    if (isNaN(total)) {
                        total= +result;
                        y= total + x;
                    }

                    else {
                        if (x=='=') {
                            y= y + result;
                            z= x + "   " + total;
                        }
                        else if (x=='/100') {
                            y= result + x;
                            z= "=" + "   " + total;
                        }
                        else {
                            y= y + result +  x;
                        }
                    
                    }
            }
            equalDisplay.textContent=z;
            display.textContent= y;
            result = ' ';

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
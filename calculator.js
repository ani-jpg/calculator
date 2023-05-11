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
let x, z;

function math() {
let result= '';
buttons.forEach((button)=> {button.addEventListener ('click', () => {

let numbDisplay= button.id.match(/[0-9.*+-]/g);
if (numbDisplay) {
    display.textContent+=button.id;
}

if (button.classList=='number-btn') {
    result += button.id;
    return result;
}

if (operator=='+') {
    total= add (+result, total);
}
else if (operator=='-') {
    total= subtract(total, +result)
}
else if (operator=='x') {
    if (result==' ') {
        total= multiply(1, total);
    }
    else {
        total= multiply(+result, total);
    }
}
if (total!=undefined && !isNaN(total)) {
equalDisplay.textContent= "=" + "   " + total;
}
else {
equalDisplay.textContent= ' ';
}

//Backspace
if (button.id=='backspace') {
    console.log('before',result, total);
    const operands=display.textContent.split(/[-+x]/);
    console.log(operands,operands[operands.length-2]);
    
    
    
    if (display.textContent.match(/[^0-9.]$/)) {
        operator= display.textContent.charAt(display.textContent.length-1);
        console.log(operator);
        equalDisplay.textContent= total;
        
    }

    if (display.textContent.match(/[0-9.]$/)) {
    equalDisplay.textContent= ' ';
         if (result== '') {
            result= operands[operands.length-1];
            console.log(result);
         }
    }
    
    if (display.textContent.length<3) {
        total=NaN;
        equalDisplay.textContent= ' ';
    }

    display.textContent = display.textContent.substring(0, display.textContent.length-1);

    if (operator=='+') {
        total= subtract (total, +result);
    }
    else if (operator=='-') {
        total= add(total, +result)
    }
    else if (operator=='x') {
        if (total==0) {
            total= +result;
        }
        else {
            total= divide(total, +result);
        }
    }
    result= '';
    console.log(total);
    return total;
    
}

if (button.classList=='operator-btn') {
    if (button.id=='+') {
        operator= '+';
    }

    else if (button.id=='-') {
        operator='-';
        
    }

    else if (button.id=='*') {
        operator='x';
    
    }
    
    else if (button.id=='equal') {
        operator='=';

    }

    else if (button.id=='%') {
        if (isNaN(total)) {
            total= +result/100;
        }
        else {
            result= total;
            total= total/100;
        }
        operator= '/100'
        
    }

        if (isNaN(total)) {
            total= +result;
            y= total + operator;
        }

        else {
            if (x=='=') {
                y= y + result;
                
            }
            else if (x=='/100') {
                y= result + operator;
                
            }
            else {
                y= y + result +  operator;
            }
        
        }
}

result = ' ';


            if (button.id=='clear') {
                total= NaN;
               
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

        if (keyValue.key=' ') {
            
        }

        if (button) {
            button.click();
        }  
})

math ();

//lots of errors in the code like when u click CE the keyboard dont work properly and the backspace dont work and the equals dont work and so much lol
//not sure how to mimick the hover and click effect with keyboard 
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

let result;
let numb1=NaN;
let numb2=NaN;
let operator='';

function math() {

buttons.forEach((button)=> {button.addEventListener ('click', () => {

let numbDisplay= button.id.match(/[0-9.*+-]/g);
if (numbDisplay) {
    display.textContent+=button.id;
}

const operands=display.textContent.split(/[-+*]/);

if (operands.length>1) {
    if (operands[operands.length-1]!=='') {
        
        if (isNaN(result)) {
            numb1=+(operands[0]);
        }
        else {
            numb1= result;
            
        }
        numb2= operands[operands.length-1];
}
}

if (operator=='+') {
    result= add(+numb1, +numb2);
}
else if (operator=='-') {
    result= subtract(+numb1, +numb2)
}
else if (operator=='x') {
    result= multiply(+numb1, +numb2);
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
}

equalDisplay.textContent=result;

return result;
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
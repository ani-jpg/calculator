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

function percentage(a) {
    return a/100;
}

//Calculator math & display
const buttons= document.querySelectorAll('button');
const display= document.querySelector('#display');
const equalDisplay= document.querySelector('#equal-display');

let result=NaN;
let numb1=NaN;
let numb2='test';
let operator='';

function math() {

buttons.forEach((button)=> {button.addEventListener ('click', () => {

let numbDisplay= button.id.match(/[%0-9.*+-=/]/g);
if (numbDisplay) {
    display.textContent+=button.id;
}

const operands=display.textContent.split(/[-+*/]/);

if (button.id=='backspace') {
    
    if (display.textContent.match(/[^0-9.]$/)) {
        operator= '';
    }

    display.textContent = display.textContent.substring(0, display.textContent.length-1);
}

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

if (button.classList=='operator-btn') {

    if (operator=='+') {
        result= add(+numb1, +numb2);
    }
    else if (operator=='-') {
        result= subtract(+numb1, +numb2)
    }
    else if (operator=='x') {
        result= multiply(+numb1, +numb2);
    }
    else if (operator=='/') {
        result=divide(+numb1, +numb2)
    }
    

    if (button.id=='+') {
        operator= '+';
    }
    else if (button.id=='-') {
        operator='-';
    }
    else if (button.id=='*') {
        operator='x';
    }
    else if (button.id=='/') {
        operator='/'
    }
    else if (button.id=='equal') {
        operator='=';
    }
}

if (button.id=='/100') {
        
    if (operands.length<=1) {
        const percent=display.textContent.split('/100');
        result=percentage(+(percent[0]))
    }
    if (operands.length>1) {
        result=percentage(+result)
    }
    display.textContent = result;
    numb1=result;
    numb2='';
} 

equalDisplay.textContent=result;

if (button.id=='Ans') {
    display.textContent = result;
    equalDisplay.textContent='';
    numb1=result;
    numb2='';
}

if (button.id=='clear') {
    display.textContent = '';
    equalDisplay.textContent='';
    numb2='';
    result=NaN;
}

if (button.id=='equal') {
    equalDisplay.textContent= "=" + "  " + result;
}

return result;
    })  
    })
};

//Keyboard functionality 
document.addEventListener('keydown', (keyValue) => {
    let key= keyValue.key.match(/[/0-9.*+-]/g);
    let button = document.querySelector(`button[id="${key}"]`);
        if (keyValue.key=='Enter') {
            button= document.querySelector(`button[id="${'equal'}"]`);
        }
        if (keyValue.key=='Backspace') {
            button= document.querySelector(`button[id="${'backspace'}"]`);
        }

        if (keyValue.key=='%') {
            button= document.querySelector(`button[id="${'/100'}"]`);
        }

        if (keyValue.key=' ') {
            
        }

        if (button) {
            button.click();
        }  
})

math ();


//Game



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



let operators='';
let operation;
let reuslt=NaN;

let numb1=NaN;
let numb2=NaN;

function math() {

buttons.forEach((button)=> {button.addEventListener ('click', () => {

let numbDisplay= button.id.match(/[0-9.*+-]/g);
if (numbDisplay) {
    display.textContent+=button.id;
}

if (display.textContent.match(/[^0-9.]$/)) {
    operators+=button.id;
}

let operatorArray=operators.split('');

const operands=display.textContent.split(/[-+x]/);

if (operands.length<3) {
    numb1=operands[0];
    numb2=operands[1];
    result= add(+numb1, +numb2)
    console.log(numb1, numb2, result);
}

else if (operands.length>=3) {
    if (operands[operands.length-1]!=='') {
        numb1= result;
        console.log(result,'hi')
        numb2= operands[operands.length-1];
        result= add(+numb1, +numb2)

        for (j=0; j<operatorArray.length; j++) {
            operation=operatorArray[j];
        }
        console.log(+result);
        
        
    }
       
}

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
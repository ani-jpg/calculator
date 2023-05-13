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
let operator='';
let x, z;
let numb1, numb2;

function math() {
let result= '';
buttons.forEach((button)=> {button.addEventListener ('click', () => {

let numbDisplay= button.id.match(/[0-9.*+-]/g);
if (numbDisplay) {
    display.textContent+=button.id;
}

if (display.textContent.match(/[^0-9.]$/)) {
    operator+=button.id;
}

let operators=operator.split('');
console.log(operators);


const operands=display.textContent.split(/[-+x]/);


if (operands.length>=2) {
    for (i=0; i<operands.length; i++) {
        numb1= operands[i];
        numb2= operands [i+1];
        let result= add(+numb1, +numb2);
        
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
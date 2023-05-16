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

if (gameOn==false) {
    let numbDisplay= button.id.match(/[%0-9.*+-=÷]/g);

        if (numbDisplay) {
        display.textContent+=button.id;
    }


    const operands=display.textContent.split(/[-+*÷]/);
    
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
        else if (button.id=='÷') {
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
    if (isNaN(result)) {
        equalDisplay.textContent='';
    }
    
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
    }
    
    else if (gameOn==true) {
        let userValue=button.id.match(/[0-9.]/g)
        console.log('woohoo');
        if (userValue) {
            equalDisplay.textContent+=button.id;
        }
        
        

        
    }
    

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

        if (keyValue.key=='/') {
            button= document.querySelector(`button[id="${'÷'}"]`);
        }

        if (button) {
            button.click();
        }  
})

math ();
//theres a problem with ur code organization bc when u press + + then it does plus twice but after 2 times the error dissipates 


//Game

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomOp () {
    let opArray=['+', '-', '*', '÷']
    return opArray[Math.floor(Math.random() * 4)];
}

let gameTotal='';
let gameOn=false;
const displayBox=document.querySelector('.display-box')
function game() {
    let x=getRandomInt(9)
    let y= getRandomInt(9);
    let randomOp= getRandomOp();

    if (randomOp=='+') {
        gameTotal=add(x,y);
    }
    if (randomOp=='-') {
        gameTotal=subtract(x,y)
    }
    if (randomOp=='*') {
        gameTotal=multiply(x,y)
    }
    if (randomOp=='÷') {
        gameTotal==divide(x,y)
    }
    display.textContent= x + randomOp + y

    return gameTotal;
}

const gameMode=document.querySelector('#game')
let enterButton = document.createElement("button");
enterButton.id = "gameEnterBtn";
const calcBox = document.querySelector(".calculator-box");
const opBtns= document.querySelectorAll('.operator-btn');

gameMode.addEventListener('click', () => {
    gameOn=true;
    equalDisplay.textContent='';
    calcBox.appendChild(enterButton);
    opBtns.forEach(btn => {
        btn.remove();
    });
    
    game();
    
});

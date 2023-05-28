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
let correctAns=false;
let gameScore=-1;

function math() {

buttons.forEach((button)=> {button.addEventListener ('click', () => {
const operands=display.textContent.split(/[-+*÷]/);

if (gameOn==false) {
    let numbDisplay= button.id.match(/[%0-9.*+-=÷]/g);

        if (numbDisplay) {
        display.textContent+=button.id;
    }
    
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
        if (result % 1 !== 0) {
            display.textContent = result.toFixed(5);
        }
        else {
            display.textContent = result
        }
        numb1=result;
        numb2='';
    } 
    if (result % 1 !== 0) {
    equalDisplay.textContent=result.toFixed(5);
    }
    else {
        equalDisplay.textContent=result
    }

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
        if (result % 1 !== 0) {
        equalDisplay.textContent= "=" + "  " + result.toFixed(5);
        }
        else {
        equalDisplay.textContent= "=" + "  " + result;
        }
    }
    
    return result;
    }
    
    else if (gameOn==true) {
        let userValue=button.id.match(/[-0-9.]/g)
        correctAns=false;
        if (userValue) {
            equalDisplay.textContent+=button.id;
        } 

        if (equalDisplay.textContent==gameTotal) {
            correctAns=true;
        }
        else if (equalDisplay.textContent!=gameTotal) { 
            console.log('wrong')
        }

        if (button.id=='backspace') {
            equalDisplay.textContent = equalDisplay.textContent.substring(0, equalDisplay.textContent.length-1);
        }
    }

    })  
    })
};

//Keyboard functionality 
document.addEventListener('keydown', (keyValue) => {
    let key= keyValue.key.match(/[/0-9.*+-]/g);
    let button = document.querySelector(`button[id="${key}"]`);
        if (keyValue.key=='Backspace') {
            button= document.querySelector(`button[id="${'backspace'}"]`);
        }

        if (keyValue.key=='%') {
            button= document.querySelector(`button[id="${'/100'}"]`);
        }

        if (keyValue.key=='/') {
            button= document.querySelector(`button[id="${'÷'}"]`);
        }

        if (keyValue.key=='Enter') {
            if (gameOn==false) {
                button= document.querySelector(`button[id="${'equal'}"]`);
            }
            
            else if (gameOn==true) {
                button= document.querySelector('#gameEnterBtn');
            }
        }

        if (button) {
            button.click();
        }      
})

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
        gameTotal=divide(x,y)
    }
    display.textContent= x + randomOp + y
    return gameTotal;
}

let enterButton = document.createElement("button");
enterButton.id = "gameEnterBtn";
enterButton.textContent= "↵"
enterButton.classList.add("bigEnterKey");

let topRow= document.createElement("div");
topRow.id='topRow';

let mins= 2;
let secs= 0;

topRow.textContent=mins + ':' + ('0'+ secs).slice(-2);
let timerInterval= setInterval(timer, 1000);

function timer() {
    if (secs==0) {
        secs=59
        mins=mins-1;
    }
    else {
        secs=secs-1;
    }
    
    if (secs==0 && mins==0) {
        clearInterval(timerInterval);
    }
    topRow.textContent=mins + ':' + ('0'+ secs).slice(-2);
}


const gameMode=document.querySelector('#game')
const calcBox = document.querySelector(".calculator-box");
const opBtns= document.querySelectorAll('[id="*"], [id="÷"], [id="equal"], [id="+"]');
const topRowBtns=document.querySelectorAll('.top-row-btns')
const backspaceBtn=document.querySelector('#backspace');
const gameMinus=document.querySelector('[id="-"]')

gameMode.addEventListener('click', (button) => {
    gameOn=true;
    regCalc=false;
    equalDisplay.textContent='';
    backspaceBtn.classList.add("backspaceBtn");
    gameMinus.classList.add("gameMinus");
    calcBox.appendChild(enterButton);
    calcBox.appendChild(topRow);
    opBtns.forEach(btn => {
        btn.remove();
    });
    topRowBtns.forEach(btn => {
        btn.remove();
    });
});

enterButton.addEventListener('click', ()=> {
    equalDisplay.textContent='';
    console.log(correctAns);
    if (correctAns==true) {
        game();
        gameScore+=1;
        console.log(gameScore);
    }
    return gameScore;
})

math ();

//need to change to allow negative numbers input as answers 
//issues with divide like it gives u 3/7
//backspace dont work in the game 
//dont forget the decimals and rounding in the game 
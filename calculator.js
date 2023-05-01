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

//Display variables on calculator 
const buttons= document.querySelectorAll('button');
const display= document.querySelector('#display');

function calcDisplay() {
buttons.forEach((button)=> { button.addEventListener ('click', () => {
    display.textContent= button.id;
})
})
};
calcDisplay();


//Math functions 
let total;
let operator='lalalalala';
function math() {
let result= '';
    buttons.forEach((button)=> {button.addEventListener ('click', () => {
            if (button.classList=='number-btn') {
                result += button.id;
                display.textContent=result;

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

                return result;
            }
            
            if (button.classList=='operator-btn') {
                if (button.id=='add') {
                    operator='add';
                }
    
                else if (button.id=='subtract') {
                    operator='subtract'
                }
    
                else if (button.id=='multiply') {
                    operator='multiply';
                }
                
                else if (button.id=='equal') {
                    total=total;
                }

                if (isNaN(total)) {
                    total= +result;
                }
                result = ' ';
            }

            return total;
    })  
    })
    
};

math ();

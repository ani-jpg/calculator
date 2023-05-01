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


const buttons= document.querySelectorAll('button');
const display= document.querySelector('#display');

function calcDisplay() {
buttons.forEach((button)=> { button.addEventListener ('click', () => {
    display.textContent= button.id;
})
})
};
calcDisplay();

let total;
let operator='lalallalala';
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
                //need to store the variable- done, its stored as result 
            }
            
            if (button.classList=='operator-btn') {
                //store number as operator & if next is also a numb then you execute func of operator
                if (button.id=='add') {
                    operator='add';
                }
    
                else if (button.id=='subtract') {
                    operator='subtract'
                }
    
                else if (button.id=='multiply') {
                    operator='multiply';
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

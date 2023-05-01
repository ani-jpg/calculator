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
let operator;
function math() {
let result= '';
    buttons.forEach((button)=> {button.addEventListener ('click', () => {
            if (button.classList=='number-btn') {
                result += button.id;
                display.textContent=result;
                console.log(total, 'heylo');
                return result;
                //need to store the variable- done, its stored as result 
            }
            
            if (button.classList=='operator-btn') {
                //store number as operator & if next is also a numb then you execute func of operator
                
                if (isNaN(total)) {
                    total= +result;
                    console.log(total, 'nan')
                }

                else {
                    
                if (button.id=='add') {
                    total= add (+result, total);
                }
    
                    else if (button.id=='subtract') {
                        total= subtract(total, +result)
                    }
    
                    else if (button.id=='multiply') {
                        total= multiply(+result, total);
                    }
                    
                }
                
                result = ' ';
            }
            console.log(total, 'ayo');
            return total;
            
            
    
    })  
    })
    
};

math ();


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

//Backspace- doesnt work unless u press enter the total dont register
if (button.id=='backspace') {
    
    
    let secondLast= display.textContent.charAt(display.textContent.length-2) 

    if (display.textContent.match(/[^0-9.]$/)) {
        operator= display.textContent.charAt(display.textContent.length-1);
        equalDisplay.textContent= total;
    }

    if (display.textContent.match(/[0-9.]$/)) {
        equalDisplay.textContent= ' ';
         if (result== '') {
            result= operands[operands.length-1];
         }
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
    
    if (display.textContent.length<3) {
        result=+(operands[0]);
        total=NaN;
        equalDisplay.textContent= ' ';
    }
    console.log(total, 'result', result, operands)
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
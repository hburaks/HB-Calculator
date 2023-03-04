let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;

function add(firstOperand,secondOperand) {
    return firstOperand + secondOperand ;
}


function extract(firstOperand,secondOperand) {
    return firstOperand - secondOperand ;
}


function multiply(firstOperand,secondOperand) {
    return firstOperand * secondOperand ;
}

function divide(firstOperand,secondOperand) {
    return firstOperand / secondOperand ;
}

function remainder(firstOperand,secondOperand) {
    return firstOperand % secondOperand 
}


function squareRoot(firstOperand) {
    return Math.sqrt(firstOperand)
}

function operate(firstOperand, secondOperand, operator){
    if (operator === "+"){
        return add(firstOperand,secondOperand);
    } else if (operator === "-"){
        return extract(firstOperand,secondOperand);
    } else if (operator === "x"){
        return multiply(firstOperand,secondOperand);
    } else if (operator === "/"){
        return divide(firstOperand,secondOperand);
    } else if (operator === "%"){
        return remainder(firstOperand,secondOperand);
    } else {
        return "Error: invalid operator";
    }    
}


const display = document.querySelector("#display")

function updateOperand() {
    let operandValue = this.value;
    display.value += operandValue
}
const operand = document.querySelectorAll("#operand")
operand.forEach(button => {
    button.addEventListener("click",updateOperand); 
})

function updateOperator() {
    let operatorValue = this.value;
    if (operatorValue === 'AC'){
        display.value = ""
    }  else if (operatorValue === '.'){
        display.value += operatorValue
    } else if (operatorValue === '+/-'){
        display.value = display.value*(-1)
    } else if (operatorValue === '√x'){
        display.value = squareRoot(display.value)
    } else if (operatorValue === '♥'){
        display.value = ""
        display.value += operatorValue 
    } else {
    firstOperand = display.value
    display.value = ""
    display.value += operatorValue
    operator = display.value    
    } 
}
const operators = document.querySelectorAll("#operator");
operators.forEach(function(operator){
    operator.addEventListener("click",updateOperator);
    
})



function updateSecondOperand(){
    const toSliced = display.value
    if (operator === null || firstOperand === null) {
        display.value = "";
        return;
    }
    secondOperand = parseFloat(toSliced.slice(1));
    result = operate(parseFloat(firstOperand), parseFloat(secondOperand), operator);
    display.value = result;
    firstOperand = result;
    operator = null;
}

const equals = document.querySelector("#equal");
equals.addEventListener("click", updateSecondOperand);
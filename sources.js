let firstOperand = 5
let secondOperand = 3

const operateArray = ["+", "-", "x", "/", "%", "√x", "+/-"];
function add(firstOperand,secondOperand) {
    result = firstOperand + secondOperand ;
    console.log(result)
    return result
}


function extract(firstOperand,secondOperand) {
    result = firstOperand - secondOperand ;
    console.log(result)
    return result
}


function multiply(firstOperand,secondOperand) {
    result = firstOperand * secondOperand ;
    console.log(result)
    return result
}

function divide(firstOperand,secondOperand) {
    result = firstOperand / secondOperand ;
    console.log(result)
    return result
}

function negative(firstOperand){
    result = firstOperand * (-1);
    console.log(result)
    return result
 }

 function remainder(firstOperand,secondOperand) {
    result = firstOperand % secondOperand 
    console.log(result)
    return result
}


function squareRoot(firstOperand) {
    result = Math.sqrt(firstOperand)
    console.log(result)
    return result
}

function operate(firstOperand, secondOperand, operand){
    if (operand === "+"){
        add(firstOperand,secondOperand);
    } else if (operand === "-"){
        extract(firstOperand,secondOperand);
    } else if (operand === "x"){
        multiply(firstOperand,secondOperand);
    } else if (operand === "/"){
        divide(firstOperand,secondOperand);
    } else if (operand === "%"){
        remainder(firstOperand,secondOperand);
    } else if (operand === "√x"){
        squareRoot(firstOperand);
    } else if (operand === "+/-"){
        negative(firstOperand);
    }
    
}

operateArray.forEach(function(operand){
    operate(firstOperand, secondOperand, operand)
});
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(firstNumber, operator, secondNumber){
    if(operator === "+"){
        return add(firstNumber, secondNumber);
    } else if(operator === "-"){
        return subtract(firstNumber, secondNumber);
    } else if(operator === "x"){
        return multiply(firstNumber, secondNumber);
    } else if(operator === "/"){
        return divide(firstNumber, secondNumber);
    }
}

let buttons  = document.querySelectorAll("button");
let displayText = document.querySelector(".displayText");
let isCalculated = false;

document.addEventListener("keydown", (event) => {
    let value = event.key;

     let equalsSign = "Enter";
        
       if(isCalculated &&  (+value || value === "0" || value === ".")){

        numberPressedAfterCalc()
       }

       if(sum.operator === "" && 
        (+value || value === "0" || (value === "." && !sum.firstNumber.includes(".")))){
        getFirstNum(value);
        }

        getOperator(value);
        getSecondNum(value);
        getResult(value, equalsSign);
        getResultOnOperator(value);

        if(value === "Backspace"){
             backspace();
        }

        if(value === "Delete"){
            allClear();
        }

        console.log(sum.firstNumber, sum.operator, sum.secondNumber, sum.result )
 })

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.textContent;
        let equalsSign = "=";
        
       if(isCalculated && sum.operator === "" && (+value || value === "0" || value === ".")){
        numberPressedAfterCalc()
        console.log("its this again");
       }

       if(sum.operator === "" && 
        (+value || value === "0" || (value === "." && !sum.firstNumber.includes(".")))){
        getFirstNum(value);
        }

        getOperator(value);
        getSecondNum(value);
        getResult(value, equalsSign);
        getResultOnOperator(value);

        if(value === "DEL"){
             backspace();
        }

        if(value === "C"){
            allClear();
        }

        console.log(sum.firstNumber, sum.operator, sum.secondNumber, sum.result )
    });
} );

   function  handlerZeroDivision(){
        if(sum.operator === "/" && sum.secondNumber === 0){
            allClear();
            return displayText.textContent = "NaN";
        }
    }

function numberPressedAfterCalc(){
        allClear();
        isCalculated = false;
}

function getFirstNum(value){
            sum.firstNumber += value;
            displayText.textContent = sum.firstNumber; 
}

function backspace(){
    console.log(displayText.textContent + " " + sum.firstNumber) 
    if(displayText.textContent === sum.firstNumber){
         sum.firstNumber = sum.firstNumber.slice(0, -1);
        displayText.textContent = sum.firstNumber;
        }

    else if(displayText.textContent === sum.secondNumber){
         sum.secondNumber = sum.secondNumber.slice(0, -1);
        displayText.textContent = sum.secondNumber;
    }
}   

function getOperator(value){
     if(sum.firstNumber !== "" && 
        sum.operator === "" && 
        Object.values(operators).some(operator => operator === value)){
            sum.operator = value;       
        } 
}

function getSecondNum(value){
     if(sum.firstNumber !== "" && 
        sum.operator !== "" && 
        (+value || value === "0" || (value === "." && !sum.secondNumber.includes(".")))){
           sum.secondNumber += value;  
           displayText.textContent = sum.secondNumber;
        }
}

function getResult(value, operator){
       if(sum.firstNumber !== "" && 
        sum.secondNumber !== "" && 
        sum.operator !== "" && 
        value === operator){
            sum.result = operate(Number(sum.firstNumber), sum.operator, Number(sum.secondNumber));
            if(handlerZeroDivision()){
                return;
            } 
            sum.firstNumber = sum.result
            sum.operator = "";
            sum.secondNumber = "";       
            displayText.textContent = sum.result;
            isCalculated = true;
        }
}


function getResultOnOperator(value){
       if(sum.firstNumber !== "" && sum.secondNumber !== "" && Object.values(operators).some(operator => operator === value)){
             sum.result= operate(Number(sum.firstNumber), sum.operator, Number(sum.secondNumber));
             if(handlerZeroDivision()){
                return;
             }
             sum.operator = value;
             sum.firstNumber = sum.result;
             sum.secondNumber = "";

             displayText.textContent = sum.result;
             isCalculated = true;
        }
}

function allClear(){
        sum.firstNumber = "";
        sum.operator = "";
        sum.secondNumber = "";
        sum.result = "";
        displayText.textContent = 0;
        isCalculated = false;
}

let sum = {
    firstNumber: "",
    operator: "",
    secondNumber:"",
    result:""
}

const operators = {
    addition: "+",
    multiply: "x",
    divide: "/",
    subtract: "-",
}

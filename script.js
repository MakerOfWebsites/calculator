let firstNumber;
let operator;
let secondNumber;

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

let firstNumbers = [];
let secondNumbers = [];
let result;

let buttons  = document.querySelectorAll("button");
let displayText = document.querySelector(".displayText");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.textContent;
        let equalsSign = "=";

        getFirstNum(value);
        getOperator(value);
        getSecondNum(value);
        getResult(value, equalsSign);
        getResultOnOperator(value);
        allClear(value);

        console.log(sum.firstNumber, sum.operator, sum.secondNumber);
        console.log("result " + operate(sum.firstNumber, sum.operator, sum.secondNumber))  
    });
} )

function getFirstNum(value){
    if(typeof sum.operator === "undefined" && (+value || value === "0")){
            sum.firstNumber = Number(getNum(value, firstNumbers));

            displayText.textContent = sum.firstNumber;
         }
}

function getOperator(value){
     if(typeof sum.firstNumber !== "undefined" && typeof sum.operator === "undefined" && Object.values(operators).some(operator => operator === value)){
            sum.operator = value;       
        } 
}

function getSecondNum(value){
     if(typeof sum.firstNumber !== "undefined" && typeof sum.operator !== "undefined" && (+value || value === "0" || value === ".")){
           sum.secondNumber = Number(getNum(value,secondNumbers));  

           displayText.textContent = sum.secondNumber;
        }
}

function getResult(value, operator){
       if(typeof sum.firstNumber !== "undefined" && typeof sum.secondNumber !== "undefined" && typeof sum.operator !== "undefined" && value === operator){
            let result = operate(sum.firstNumber, sum.operator, sum.secondNumber);
            sum.firstNumber = result;
            sum.operator = undefined;
            sum.secondNumber = undefined; 
            firstNumbers = []
            secondNumbers = [];
            
            displayText.textContent = result;
        }
}

function getResultOnOperator(value){
       if(typeof sum.firstNumber !== "undefined" && typeof sum.secondNumber !== "undefined" && Object.values(operators).some(operator => operator === value)){
             let result = operate(sum.firstNumber, sum.operator, sum.secondNumber);
             sum.operator = value;
             sum.firstNumber = result;
             sum.secondNumber = undefined;
             firstNumbers = [];
             secondNumbers = [];

             displayText.textContent= result;
        }
}

function allClear(value){
    if(value === "C"){
        sum.firstNumber = undefined;
        sum.operator = undefined;
        sum.secondNumber = undefined;
        firstNumbers = [];
        secondNumbers= [];
        displayText.textContent = 0;
    }
}


 function getNum(num, array) {
        array.push(num);
        return array.join("");
}

let sum = {
    firstNumber: undefined,
    operator: undefined,
    secondNumber: undefined
}

const operators = {
    addition: "+",
    multiply: "x",
    divide: "/",
    subtract: "-",
}




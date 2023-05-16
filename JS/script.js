const firstOperand = document.querySelector(".first-operand");
const operator = document.querySelector(".operator");
const secondOperand = document.querySelector(".second-operand");

const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator-button");

const calculateButton = document.querySelector(".calculate-button");
const clearButton = document.querySelector(".clear-btn");
const deleteButton = document.querySelector(".del-btn");
const decimalButton = document.querySelector(".decimal");

const result = document.querySelector(".result");

const keyboardButtons = document.querySelectorAll(".key-entry");

numButtons.forEach(validateOperands);
operatorButtons.forEach(validateOperator);

operatorEntered = false;

function validateOperands(element) {

        element.addEventListener("click", () => {

            operandEntry(element);

        });

}

function validateOperator(element) {

    element.addEventListener("click", () => {

            operatorEntry(element);

    });

}

calculateButton.addEventListener("click", () => {

    if (secondOperand.innerText != "") {

        calculate();

    }

});

clearButton.addEventListener("click", () => {

    clearCalculator();

});

deleteButton.addEventListener("click", () => {

    deleteEntry();

});

decimalButton.addEventListener("click", () => {

    decimalButtonEntry();

});

function operandEntry(element) {

    if (!operatorEntered) {


        if (!(firstOperand.innerText == "0" && element.innerText == "0")) {

            firstOperand.innerText += element.innerText;

        }

    } else {

        if (!(secondOperand.innerText == "0" && element.innerText == "0")) {

            secondOperand.innerText += element.innerText;

        }

    }

    if (result.innerText != "") {

        clearCalculator();
        
        if (!(firstOperand.innerText == "0" && element.innerText == "0")) {

            firstOperand.innerText += element.innerText;

        }

    } 

}

function operatorEntry(element) {

    if (result.innerText == ":( don't do that!") {

        clearCalculator();

    }

    if (firstOperand.innerText != "" && secondOperand.innerText == "") {

        operator.innerText = element.innerText;
        operatorEntered = true;
    
    }

    if (firstOperand.innerText != "" && secondOperand.innerText != "") {

        calculate();
        temp = result.innerText;
        clearCalculator();
        firstOperand.innerText = temp;
        operator.innerText = element.innerText;
        operatorEntered = true;
    
    }

}

function calculate() {

    switch (operator.innerText) {

        case "+":
            result.innerText = parseFloat(firstOperand.innerText) + parseFloat(secondOperand.innerText)
            break;
        case "-":
            result.innerText = parseFloat(firstOperand.innerText) - parseFloat(secondOperand.innerText)
            break;
        case "*":
            result.innerText = parseFloat(firstOperand.innerText) * parseFloat(secondOperand.innerText)
            break;
        case "/":
            if (secondOperand.innerText == "0") {
                result.innerText = ":( don't do that!"
            } else {
                result.innerText = parseFloat(firstOperand.innerText) / parseFloat(secondOperand.innerText)
            }
            break;
        default:
            break;
    }

}

function clearCalculator() {

    firstOperand.innerText = "";
    operator.innerText = "";
    secondOperand.innerText = "";
    result.innerText = "";
    operatorEntered = false;

}

function deleteEntry() {

    if (firstOperand.innerText != "" && operator.innerText == "") {

        firstOperand.innerText = firstOperand.innerText.slice(0, -1);

    } else {

        if (operator.innerText != "" && result.innerText == "") {

            secondOperand.innerText = secondOperand.innerText.slice(0, -1);

        }

    }

    if (result.innerText != "") {

        clearCalculator();

    }

}

function decimalButtonEntry() {

    if (result.innerText == ":( don't do that!") {

        clearCalculator();

    }

    if (firstOperand.innerText == "") {

        firstOperand.innerText = "0.";

    }

    if (operator.innerText != "" && secondOperand.innerText == "") {

        secondOperand.innerText = "0.";

    }

    if (firstOperand.innerText != "" && operator.innerText == ""  && !firstOperand.innerText.includes(".")) {

        firstOperand.innerText = firstOperand.innerText + ".";

    } else {

        if (operator.innerText != "" && result.innerText == "" && !secondOperand.innerText.includes(".")) {

            secondOperand.innerText = secondOperand.innerText + ".";

        }

    }

    if (result.innerText != "" && !result.innerText.includes(".")) {

        temp = result.innerText + ".";
        clearCalculator();
        firstOperand.innerText = temp;

    }

}


document.addEventListener("keypress", function(event) {

    for (let i = 0; i < keyboardButtons.length; i++) {

        if (event.key == keyboardButtons[i].innerText) {

            keyboardButtons[i].click();

        }
        
    }

    if (event.key == "Enter") {

        calculateButton.click();

    }

});

document.addEventListener("keydown", function(event) {

    if (event.key == "Backspace") {

        deleteButton.click();

    }

    if (event.key == "Escape") {

        clearButton.click();

    }

});
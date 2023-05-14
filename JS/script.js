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

numButtons.forEach(validateFirstOperand);
operatorButtons.forEach(validateOperator);

operatorEntered = false;

function clearCalculator() {

    firstOperand.innerText = "";
    operator.innerText = "";
    secondOperand.innerText = "";
    result.innerText = "";
    operatorEntered = false;

}

function validateFirstOperand(element) {

        element.addEventListener("click", () => {

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

        });

}

function validateOperator(element) {

    element.addEventListener("click", () => {

        if (firstOperand.innerText != "" && secondOperand.innerText == "") {

            operator.innerText = element.innerText;
            operatorEntered = true;
        
        }

    });

}

calculateButton.addEventListener("click", () => {

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
            result.innerText = parseFloat(firstOperand.innerText) / parseFloat(secondOperand.innerText)
            break;
        default:
            break;
    }

});

clearButton.addEventListener("click", () => {

    clearCalculator();

});

deleteButton.addEventListener("click", () => {

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

});

decimalButton.addEventListener("click", () => {

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

});


const firstOperand = document.querySelector(".first-operand");
const operator = document.querySelector(".operator");
const secondOperand = document.querySelector(".second-operand");

const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator-button");

const calculateButton = document.querySelector(".calculate-button");

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

                firstOperand.innerText += element.innerText;

            } else {

                secondOperand.innerText += element.innerText;

            }

            if (result.innerText != "") {

                clearCalculator();
                firstOperand.innerText += element.innerText;

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
            result.innerText = parseInt(firstOperand.innerText) + parseInt(secondOperand.innerText)
            break;
        case "-":
            result.innerText = parseInt(firstOperand.innerText) - parseInt(secondOperand.innerText)
            break;
        case "*":
            result.innerText = parseInt(firstOperand.innerText) * parseInt(secondOperand.innerText)
            break;
        case "/":
            result.innerText = parseInt(firstOperand.innerText) / parseInt(secondOperand.innerText)
            break;
        default:
            break;
    }

});




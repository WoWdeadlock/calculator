const firstOperand = document.querySelector(".first-operand");
const operator = document.querySelector(".operator");

const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator-button");

numButtons.forEach(validateNumber);
operatorButtons.forEach(validateOperator);

function validateNumber(element) {

    element.addEventListener("click", () => {

        firstOperand.innerText += element.innerText;

    });

}

function validateOperator(element) {

    element.addEventListener("click", () => {

        operator.innerText = element.innerText;

    });

}

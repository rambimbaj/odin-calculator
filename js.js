let number1 = "";
let number2 = "";
let operator = "";
let showResult = false;
let display = document.querySelector(".display");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  if (number2 === 0) {
    return "Error";
  }
  return number1 / number2;
}

function operate() {
  const num1 = parseFloat(number1);
  const num2 = parseFloat(number2);
  let result = "";
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "";
  }
  display.textContent = result;
  showResult = true;
}

function appendDisplay(value) {
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = "";
  number1 = "";
  number2 = "";
  operator = "";
}

numberButton.forEach((element) => {
  element.addEventListener("click", () => {
    if (showResult) {
      clearDisplay();
      showResult = false;
    }
    appendDisplay(element.textContent);
    if (!operator) {
      number1 += element.textContent;
    } else {
      number2 += element.textContent;
    }
  });
});

operatorButton.forEach((element) => {
  element.addEventListener("click", () => {
    if (number1 && !operator) {
      operator = element.textContent;
      appendDisplay(operator);
    }
  });
});

clearButton.addEventListener("click", () => {
  clearDisplay();
});

equalsButton.addEventListener("click", () => {
  if (number1 && number2 && operator) {
    operate();
  }
});

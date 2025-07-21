//variable declaration
const displayCalc = document.querySelector(".display");
const keyButtons = document.querySelectorAll(".key");
const opMap = {
    plus: "+",
    minus: "-",
    multi: "*",
    divide: "/"
};

function evalExpression(expr) {
  try {
    // eslint-disable-next-line no-new-func
    return Function(`"use strict"; return (${expr})`)();
  } catch {
    return "Error";
  }
}

function handleKey(value){
    switch (value){
        case "deleteAll":
            displayCalc.textContent = "";
            break;
        case "dekete":
            displayCalc.textContent = displayCalc.textContent.slice(0,-1);
            break;
        case "equal":
            displayCalc.textContent = evalExpression(displayCalc.textContent);
            break
        default:
            const toAdd = opMap[value] ?? value;
            displayCalc.textContent += toAdd;
    }   
}

keyButtons.forEach(button => {
  button.addEventListener("click", () => {
    handleKey(button.value);
    });
});
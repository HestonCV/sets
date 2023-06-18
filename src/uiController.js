import CustomSet from "./customSet";
import setCalculator from "./setCalculator";

class UIController {
  constructor() {
    this.addSetButton = document.getElementById("add-set");
    this.addSetForm = document.querySelector(".add-set-container > form");
    this.displayElement = document.getElementById("display-text");
  }

  initEventListeners() {
    // add set button
    this.addSetButton.addEventListener("click", () => {
      this.addSetForm.style.display =
        this.addSetForm.style.display === "flex" ? "none" : "flex";
    });

    // add set modal
    this.addSetForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.querySelector(".add-set-container > form > input");
      const setName = input.value;
      const setA = new CustomSet(setName, true);
      input.value = "";
      this.addSetForm.style.display = "none";
    });

    // display button event listeners
    // clear button
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", () => {
      this.displayElement.textContent = "";
      setCalculator.clear();
    });
    // backspace button
    const backspaceButton = document.getElementById("backspace");
    backspaceButton.addEventListener("click", () => {
      this.displayElement.textContent = this.displayElement.textContent.slice(
        0,
        -1
      );
      setCalculator.backspace();
    });
    // calculate button
    const calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", () => {
      const result = setCalculator.calculate();
      if (result) {
        this.displayElement.textContent += " = ";
        this.displayElement.textContent += `{ ${result.join(", ")} }`;
      } else {
        this.displayElement.textContent = "ERROR";
      }
      setCalculator.clear();
    });
    this.initKeyboardEventListeners();
  }

  initKeyboardEventListeners() {
    // add event listeners to each keyboard button, pass them to calculator and update display when clicked
    const unionButton = document.getElementById("union");
    const intersectionButton = document.getElementById("intersection");
    const symmetricalDifferenceButton = document.getElementById(
      "symmetrical-difference"
    );
    const differenceButton = document.getElementById("difference");
    const openParenthesisButton = document.getElementById("open-parenthesis");
    const closeParenthesisButton = document.getElementById("close-parenthesis");

    const buttons = [
      unionButton,
      intersectionButton,
      symmetricalDifferenceButton,
      differenceButton,
      openParenthesisButton,
      closeParenthesisButton,
    ];

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        this.displayElement.textContent += button.textContent;
        setCalculator.addInput(button.id);
      });
    });
  }
}

const uiController = new UIController();

export default uiController;

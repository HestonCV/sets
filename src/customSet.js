import createElement from "./createElement";
import setCalculator from "./setCalculator";

export default class CustomSet {
  constructor(name, create) {
    // if create is true, html elements will be created
    // this is false when used for calculations only
    this.create = create;
    this.name = name;
    this.items = [];
    this.element = null;
    this.keyboardElement = null;
    this.init();
  }

  init() {
    if (this.create) {
      this.createSetElement();
      this.addKeyboardSetButton();
    }
  }

  createSetElement() {
    // create set element
    this.element = createElement({ element: "div", className: "set" });

    // create delete button and add event listener
    const deleteButton = createElement({
      element: "span",
      className: "delete-set",
      textContent: "-",
      parent: this.element,
    });
    deleteButton.addEventListener("click", () => {
      this.element.remove();
      this.keyboardElement.remove();
    });

    // create set name element
    createElement({
      element: "span",
      className: "set-name",
      textContent: this.name,
      parent: this.element,
    });
    createElement({ element: "span", textContent: "=", parent: this.element });

    // create set elements list
    const setElementsDisplay = createElement({
      element: "span",
      className: "set-elements",
      textContent: "{}",
      parent: this.element,
    });

    // create add element button
    const addElementButton = createElement({
      element: "span",
      className: "add-element",
      textContent: "+",
      parent: this.element,
    });
    // create add element modal
    const addElementForm = createElement({
      element: "form",
      parent: this.element,
    });
    addElementForm.style.display = "none";
    const addElementInput = createElement({
      element: "input",
      parent: addElementForm,
    });
    addElementInput.type = "text";

    addElementForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = this.element.querySelector("input");
      this.add(input.value);
      setElementsDisplay.textContent = `{ ${this.items.join(", ")} }`;
      input.value = "";
    });
    addElementButton.addEventListener("click", () => {
      addElementForm.style.display =
        addElementForm.style.display === "none" ? "flex" : "none";
    });

    const setContainer = document.querySelector(".set-container");
    setContainer.appendChild(this.element);
  }

  addKeyboardSetButton() {
    const keyboardSets = document.querySelector(".sets");
    this.keyboardElement = createElement({
      element: "span",
      textContent: this.name,
      parent: keyboardSets,
    });
    this.keyboardElement.addEventListener("click", () => {
      const displayElement = document.getElementById("display-text");

      // if the display element shows calculation or error, clear it
      if (
        displayElement.textContent.includes("=") ||
        displayElement.textContent.includes("E")
      ) {
        displayElement.textContent = "";
      }
      displayElement.textContent += this.name;
      setCalculator.addInput(this);
    });
  }

  add(value) {
    if (!this.has(value)) {
      this.items.push(value);
    }
  }

  has(value) {
    return this.items.includes(value);
  }
}

import createElement from "./createElement";

export default class CustomSet {
  constructor(name) {
    this.name = name;
    this.items = [];
    this.element = null;
    this.keyboardElement = null;
    this.init();
  }

  init() {
    this.createSetElement();
    this.addKeyboardSetButton();
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
    createElement({
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
    addElementButton.addEventListener("click", () => {
      // TODO: add element to set
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

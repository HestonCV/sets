export default class CustomSet {
  constructor() {
    this.items = [];
    this.element = null;
    this.createElement();
  }

  createElement() {}

  add(value) {
    if (!this.has(value)) {
      this.items.push(value);
    }
  }

  has(value) {
    return this.items.includes(value);
  }
}

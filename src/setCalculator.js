/* eslint-disable class-methods-use-this */
import CustomSet from "./customSet";

class SetCalculator {
  constructor() {
    this.inputs = [];
  }

  clear() {
    this.inputs.length = 0;
  }

  backspace() {
    this.inputs.pop();
  }

  addInput(input) {
    this.inputs.push(input);
  }

  calculate() {
    for (let i = 0; i < this.inputs.length; i += 1) {
      if (this.inputs[i] === "open-parenthesis") {
        const result = this.compute(i + 2);
        this.inputs.splice(i, i + 5, result);
        i = 0;
      }
    }
    while (this.inputs.length !== 1) {
      const result = this.compute(1);
      this.inputs.splice(0, 3, result);
    }

    // if the remaining item is a set, return it.
    // else return null
    if (this.inputs[0] !== null) {
      console.log(this.inputs[0].items);
      return this.inputs[0].items;
    }
    return null;
  }

  compute(i) {
    const operators = [
      "union",
      "intersection",
      "difference",
      "symmetrical-difference",
    ];
    if (operators.includes(this.inputs[i])) {
      switch (this.inputs[i]) {
        case "union":
          return this.computeUnion(this.inputs[i - 1], this.inputs[i + 1]);
        case "intersection":
          return this.computeIntersection(
            this.inputs[i - 1],
            this.inputs[i + 1]
          );
        case "difference":
          return this.computeDifference(this.inputs[i - 1], this.inputs[i + 1]);
        case "symmetrical-difference":
          return this.computeSymmetricalDifference(
            this.inputs[i - 1],
            this.inputs[i + 1]
          );
        default:
      }
    }
    return null;
  }

  computeUnion(setA, setB) {
    if (setA.items && setB.items) {
      const setC = new CustomSet("C", false);
      setA.items.forEach((item) => {
        setC.add(item);
      });
      setB.items.forEach((item) => {
        setC.add(item);
      });
      return setC;
    }
    return null;
  }

  computeIntersection(setA, setB) {
    if (setA.items && setB.items) {
      const setC = new CustomSet("C", false);
      setA.items.forEach((itemA) => {
        if (setB.has(itemA)) {
          setC.add(itemA);
        }
      });
      return setC;
    }
    return null;
  }

  computeDifference(setA, setB) {
    if (setA.items && setB.items) {
      const setC = new CustomSet("C", false);
      setA.items.forEach((itemA) => {
        if (!setB.has(itemA)) {
          setC.add(itemA);
        }
      });
      return setC;
    }
    return null;
  }

  computeSymmetricalDifference(setA, setB) {
    if (setA.items && setB.items) {
      return this.computeUnion(
        this.computeDifference(setA, setB),
        this.computeDifference(setB, setA)
      );
    }
    return null;
  }
}

const setCalculator = new SetCalculator();

export default setCalculator;

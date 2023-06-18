class SetCalculator {
  constructor() {
    this.inputs = [];
  }
  // PEMDAS

  calculate() {
    for (let i = 0; i < this.inputs.length; i += 1) {
      if (this.inputs[i] === "(") {
        let count = i + 1;
        while (this.inputs[count] !== ")") {
          count += 1;
        }
      }
    }
  }
}

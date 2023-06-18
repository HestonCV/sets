class SetContainer {
  constructor() {
    this.sets = [];
  }

  addSet(set) {
    this.sets.push(set);
  }

  getSetByName(setName) {
    this.sets.forEach((set) => {
      if (set.name === setName) {
        return set;
      }
      return null;
    });
  }
}

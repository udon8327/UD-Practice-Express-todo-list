
exports.Person = class Person {
  constructor(name) {
    this.name = name;
  }
  getFrom() {
    const state = 'Taiwan';
    return `${this.name} from ${state}.`;
  }
}

exports.user = {
  name: "UDON",
  call() { return `I'm ${this.name}` }
}

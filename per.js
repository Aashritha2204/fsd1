const person = {
    name: "John",
    age: 25,
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    },
    isAdult() {
      return this.age >= 18;
    }
  };
  person.greet();
  console.log(person.isAdult());
  
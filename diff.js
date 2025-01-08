function Example() {}
Example.prototype.sayHello = function () {
  return "Hello!";
};
const obj = new Example();
console.log(obj.__proto__ === Example.prototype);
console.log(obj.sayHello());
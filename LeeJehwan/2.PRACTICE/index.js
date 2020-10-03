function sayHello(name, age) {
  return `hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("Nico", 14);
console.log(greetNicolas);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  square: function (a, b) {
    return a ** b;
  },
};

const plus = calculator.plus(5, 5);
console.log(plus);
const minus = calculator.minus(5, 5);
console.log(minus);
const multiply = calculator.multiply(5, 5);
console.log(multiply);
const divide = calculator.divide(5, 5);
console.log(divide);
const square = calculator.square(5, 5);
console.log(square);

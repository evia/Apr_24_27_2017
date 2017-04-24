var lib = require('./Lib');
var Calculator = require("./Calculator").calculatorClass;

var calc = new Calculator();
console.log(calc.add(1,3));
console.log(calc.subtract(4,2));

lib.hello("Sam");
lib.bye("Joe");
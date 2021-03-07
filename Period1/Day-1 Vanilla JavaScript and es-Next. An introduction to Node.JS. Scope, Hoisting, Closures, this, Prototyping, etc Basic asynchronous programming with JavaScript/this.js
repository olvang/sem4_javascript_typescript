const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
// expected output: 42

// In web browsers, the window object is also the global object:
// DOES NOT WORK WITH NODE
//console.log(this === window); // true

//a = 37;
//console.log(window.a); // 37

//this.b = 'MDN';
//console.log(window.b); // "MDN"
//console.log(b); // "MDN"

// --------- FUNCTIONS
function f1() {
  return this;
}

// In a browser == True
//f1() === window; // true

// In Node:
console.log(f1() === globalThis); // true

// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = { a: 'Custom' };

// We declare a variable and the variable is assigned to the global window as its property.
a = 'Global';

function whatsThis() {
  return this.a; // The value of this is dependent on how the function is called
}

console.log(whatsThis()); // 'Global' as this in the function isn't set, so it defaults to the global/window object
console.log(whatsThis.call(obj)); // 'Custom' as this in the function is set to obj
console.log(whatsThis.apply(obj)); // 'Custom' as this in the function is set to obj

// --------- Class Context
// Static methods are not properties of this. They are properties of the class itself.
class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(proto));
    console.log(this);
  }
  first() {}
  second() {}
  static third() {}
}

new Example(); // ['constructor', 'first', 'second']

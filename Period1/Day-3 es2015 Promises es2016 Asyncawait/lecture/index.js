//-----LET
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1

//-----ARROW FUNCTION
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));
// expected output: Array [8, 6, 7, 9]

// Traditional Function
function myFunction(a, b) {
  let chuck = 42;
  return a + b + chuck;
}

// Arrow Function
const myArrowFunction = (a, b) => {
  let chuck = 42;
  return a + b + chuck;
};

//-----THIS
//Without arrow function
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
// expected output: 42

//With an arrow function this represents the owner of the function:
// define a function
let group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],

  showList() {
    this.students.forEach((student) => alert(this.title + ': ' + student));
  },
};

group.showList();

//--------- Rest parameters
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

// -------- Destructuring assignment
// ARRAY
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
// expected output: 10
console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

// OBJECT
const user = {
  id: 42,
  is_verified: true,
};

const { id, is_verified } = user;

console.log(id); // 42
console.log(is_verified); // true

// -------- event-based code
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

//Arrow function - this keyword will no longer reference the EventEmitter
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter.emit('event', 'a', 'b');

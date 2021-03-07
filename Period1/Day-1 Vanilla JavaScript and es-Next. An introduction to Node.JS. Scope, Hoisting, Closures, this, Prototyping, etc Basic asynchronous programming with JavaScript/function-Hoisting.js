//  ---------	Variable/function-Hoisting
function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a);
/*
Accessible as a global variable outside hoist() function
Output: 20
*/

console.log(b);
/*
Since it was declared, it is confined to the hoist() function scope.
We can't print it out outside the confines of the hoist() function.
Output: ReferenceError: b is not defined
*/

// ES 5
console.log(hoist); // Output: undefined

var hoist = 'The variable has been hoisted.';

// ^^ same as:
var hoist;

console.log(hoist); // Output: undefined
hoist = 'The variable has been hoisted.';

//Functions
function hoist() {
  console.log(message);
  var message = 'Hoisting is all the rage!';
}

hoist();

// ^^ same as:
function hoist() {
  var message;
  console.log(message);
  message = 'Hoisting is all the rage!';
}

hoist(); // Ouput: undefined

// So we have to do it like this:
function hoist() {
  var message = 'Hoisting is all the rage!';
  return message;
}

hoist(); // Ouput: Hoisting is all the rage!

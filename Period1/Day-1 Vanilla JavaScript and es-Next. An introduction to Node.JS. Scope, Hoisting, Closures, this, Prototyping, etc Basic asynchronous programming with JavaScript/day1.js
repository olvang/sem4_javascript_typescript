// 2) Implement user defined functions that take callbacks as an argument

var names = ['Lars', 'Peter', 'Jan', 'Lene', 'Bo'];

//a
function myFilter(arr, filterFunc) {
  const filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = filterFunc(arr[i], i, arr);
    if (result) filterArr.push(arr[i]);
  }
  return filterArr;
}

const namesWithL = myFilter(
  names,
  (name) => name.substring(0, 1).toLowerCase() === 'l'
);

console.log(namesWithL);

const namesWithLOriginal = names.filter(
  (name) => name.substring(0, 1).toLowerCase() === 'l'
);

console.log(namesWithLOriginal);

// b Implement a function: myMap(array, callback)that, provided an array and a callback,
// provides the same functionality as calling the existing map method on an array.
function myMap(arr, mapFunc) {
  const mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = mapFunc(arr[i], i, arr);
    mapArr.push(result);
  }
  return mapArr;
}

const newNames = myMap(names, (name) => 'New ' + name);
console.log(newNames);

const newNamesOrignal = names.map((name) => 'New ' + name);
console.log(newNamesOrignal);

//3 Create a new version of the two functions (without the array argument),
//  which you should add to the Array prototype property so they can be called on any array as sketched below:
Array.prototype.myFilter = function (filterFunc) {
  const filterArr = [];
  for (let i = 0; i < this.length; i++) {
    const result = filterFunc(this[i], i);
    if (result) filterArr.push(this[i]);
  }
  return filterArr;
};

const namesWithP = names.myFilter(
  (name) => name.substring(0, 1).toLowerCase() === 'p'
);

console.log(namesWithP);

Array.prototype.myMap = function (mapFunc) {
  const mapArr = [];
  for (let i = 0; i < this.length; i++) {
    const result = mapFunc(this[i], i);
    mapArr.push(result);
  }
  return mapArr;
};

const customNamesWithMap = names.myMap((name) => 'Custom ' + name);
console.log(customNamesWithMap);

// the reduce-method
var all = ['Lars', 'Peter', 'Jan', 'Bo'];

//a
const allNamesSingleString = all.reduce(function (a, b) {
  return b + ', ' + a;
}, '');

console.log(allNamesSingleString);

// Reusable Modules with Closures

// 1
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

// 2

var person = function (name, age) {
  var name = name;
  var age = age;

  return {
    getName: function () {
      return name;
    },
    setName: function (newName) {
      name = newName;
      return name;
    },
    getAge: function () {
      return age;
    },
    setAge: function (newAge) {
      age = newAge;
      return age;
    },

    getInfo: function () {
      return name + ', ' + age;
    },
  };
};

var person1 = person('Frank', 22);

console.log(person1.getInfo());
person1.name = 'Test'; // Does not change anything
console.log(person1.getInfo());

person1.setAge(23);
console.log(person1.getInfo());

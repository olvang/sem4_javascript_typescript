//Types by Inference
let helloWorld = 'Hello World';

//Same as
let helloWorldSame: string = 'Hello World';

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let list: number[] = [1, 2, 3];

// Defining Types
interface User {
  name: string;
  id: number;
}

const user: User = {
    name: "Hayes",
  //username: "Hayes",
  id: 0,
};



// generics
function identity<Type>(arg: Type): Type {
  return arg;
}

let myVar1 = identity(123)
let myVar2 = identity('123')


//  Generic Interfaces
interface Identities<V, W> {
   id1: V,
   id2: W
}

function identities<T, U> (arg1: T, arg2: U): Identities<T, U> {
   console.log(arg1 + ": " + typeof (arg1));
   console.log(arg2 + ": " + typeof (arg2));
   let identities: Identities<T, U> = {
    id1: arg1,
    id2: arg2
  };
  return identities;
}

let myVar3 = identities('Hola', 2);
console.log(myVar3);

//Classes
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();


// class with generics

class customArray<T> {
  private arr: T[] = [];

  getItems(arr: T[]) {
    return this.arr = arr;
  }

  addItem(item:T) {
    this.arr.push(item);
  }

  removeItem(item: T) {
    let index = this.arr.indexOf(item);
      if(index > -1)
        this.arr.splice(index, 1);
  }
}

let numObj = new customArray<number>();
numObj.addItem(10);

//Error
//numObj.addItem('123')

let strObj = new customArray<string>();
strObj.addItem("Robin");

console.log(numObj);
console.log(strObj);
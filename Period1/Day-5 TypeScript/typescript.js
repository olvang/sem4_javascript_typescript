var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Types by Inference
var helloWorld = 'Hello World';
//Same as
var helloWorldSame = 'Hello World';
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var list = [1, 2, 3];
var user = {
    name: "Hayes",
    //username: "Hayes",
    id: 0
};
// generics
function identity(arg) {
    return arg;
}
var myVar1 = identity(123);
var myVar2 = identity('123');
function identities(arg1, arg2) {
    console.log(arg1 + ": " + typeof (arg1));
    console.log(arg2 + ": " + typeof (arg2));
    var identities = {
        id1: arg1,
        id2: arg2
    };
    return identities;
}
var myVar3 = identities('Hola', 2);
console.log(myVar3);
//Classes
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
// class with generics
var customArray = /** @class */ (function () {
    function customArray() {
        this.arr = [];
    }
    customArray.prototype.getItems = function (arr) {
        return this.arr = arr;
    };
    customArray.prototype.addItem = function (item) {
        this.arr.push(item);
    };
    customArray.prototype.removeItem = function (item) {
        var index = this.arr.indexOf(item);
        if (index > -1)
            this.arr.splice(index, 1);
    };
    return customArray;
}());
var numObj = new customArray();
numObj.addItem(10);
//Error
//numObj.addItem('123')
var strObj = new customArray();
strObj.addItem("Robin");
console.log(numObj);
console.log(strObj);

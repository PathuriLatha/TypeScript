"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Welcome to TypeScript";
console.log(message);
var x = 10;
var y = 20;
//let x = 30;
//const y = 30;
var sum;
var total = "Declaration of const variable";
sum = "sum";
var isComputer = true;
var number = 10;
var name = "Latha";
var wish = "Good evening " + name + "!!";
console.log(wish);
/*number = false;
number = "number"
name = false;
name = 15;
isComputer = "isComputer";
isComputer = 40;
*/
console.log("x: " + x + ", y: " + y + ", sum: " + sum + ", total: " + total + ", isComputer: " + isComputer + ", number: " + number + ", name: " + name);
var n = null;
var u = undefined;
console.log("null: " + n + ", undefined: " + u);
var isBoolean = null;
var isName = undefined;
var unknownVar = 10;
console.log("boolean: " + isBoolean + ", string: " + isName + ", unknown: " + unknownVar);
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
console.log("number[]: " + list1 + ", Array<number>: " + list2);
var person1 = ['Latha', 426];
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
var c = color.green;
console.log("color: " + c + ", color[1]: " + color[1]);
var anyNumber = "variable type is any";
//console.log(`anyNumber: ${anyNumber}`);
anyNumber = 35;
//console.log(`anyNumber: ${anyNumber}`);
anyNumber = true;
console.log("anyNumber: " + anyNumber);
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
//myVariable();
//(myVariable as string).toUpperCase();
var a;
a = 20;
a = false;
a = "myName";
var b = 20;
/*b = true;
b = "anotherName";
*/
console.log("a: " + a + ", b: " + b);
function add(num1, num2) {
    console.log("num1: " + num1 + ", num2: " + num2);
    return num1 + num2;
}
console.log("add(10,20): " + add(10, 20));
console.log("add(10): " + add(10));
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Latha",
    lastName: "Pathuri"
};
fullName(p);
function optionalParameter(student) {
    console.log(student.firstName + " " + student.lastName);
}
var details = {
    firstName: "Bhargavi"
};
optionalParameter(details);
var Employee = /** @class */ (function () {
    function Employee(fName, lName) {
        this.empName = fName + " " + lName;
    }
    Employee.prototype.wish = function () {
        console.log("Good evening " + this.empName);
    };
    return Employee;
}());
var emp = new Employee("Ravinder", "Reddy");
console.log(emp.empName);
emp.wish();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(mfName, mlName) {
        return _super.call(this, mfName, mlName) || this;
    }
    Manager.prototype.work = function () {
        console.log("manager giving some task");
    };
    return Manager;
}(Employee));
var manager = new Manager("Rama", "Pathuri");
manager.work();
manager.wish();
console.log(manager.empName);
var sampleName = "I am latha";
var nameLengthTag = sampleName.length;
console.log(nameLengthTag);
var nameLengthAS = sampleName.length;
console.log(nameLengthAS);
var ex = 123456;
var exLengthTag = (ex.toString()).length;
var exLengthAs = ex.toString().length;
console.log(exLengthTag + " " + exLengthAs);

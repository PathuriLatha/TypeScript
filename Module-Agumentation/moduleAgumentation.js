"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
Student.prototype.passORFail = function (item) { return console.log(item); };
var student = new Student();
student.marks = "529";
student.percentage = "88%";
//student.passORFail(true);//it's giving run time error
student.passORFail(true);
console.log(student);
/* class Food {
  cheese: string;
}

interface Food {
  bacon: string;
}

const food  = new Food();
food.bacon = "nice bacon";
food.cheese = "sweet cheese";

console.log(food); */
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.details = function (item) {
        console.log(this.typeOfPerson + " " + item);
    };
    return Person;
}());
exports.Person = Person;

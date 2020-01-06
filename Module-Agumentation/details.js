"use strict";
exports.__esModule = true;
var moduleAgumentation_1 = require("./moduleAgumentation");
moduleAgumentation_1.Person.prototype.detailsOfPerson = function (detail) { return "Person is " + detail; };
var person = new moduleAgumentation_1.Person();
person.age = 17;
var val = person.typeOfPerson = "Student";
person.detailsOfPerson(val);
console.log(person);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        console.log("This is a constructor");
        this.fullName = firstName + " " + lastName;
    }
    return Person;
}());
exports.Person = Person;
/*
let user = new Person("Latha");
//user.firstName = "Latha";
*/

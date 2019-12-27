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
console.log("hello..!");
console.log("successfully setting up the project...");
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 1] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 2] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 3] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THU"] = 4] = "THU";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 5] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 6] = "SAT";
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 7] = "SUN";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
/*let day : DaysOfTheWeek;
day = DaysOfTheWeek.THU;
console.log(`day : ${day}`);
*/
var date = new Date();
var today = date.getDay();
console.log("today : " + today);
//console.log(`typeof date : ${typeof date.toString()}, date: ${date}`);
for (var item in DaysOfTheWeek) {
    //console.log("Number(item) typeof: "+typeof Number(item));
    //console.log(`item typeof : ${typeof item}`);
    if (item === today.toString()) {
        console.log("Today is : " + DaysOfTheWeek[item]);
    }
}
var Person = /** @class */ (function () {
    function Person(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(Person));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Person));
var admin = new Admin("admin", "admin");
var manager = new Manager("manager", "manager");
function personEcho(user) {
    return user;
}
var admins = personEcho(admin);
var managers = personEcho(manager);
/*console.log(`admins : ${admins.firstName} ${admins.lastName}`);
console.log(`managers : ${managers.firstName} ${managers.lastName}`);
*/
console.log("admin fullName : " + admins.getFullName());
console.log("manager fullName : " + managers.getFullName());
var ReadonlyModifier = /** @class */ (function () {
    //readonly name;
    function ReadonlyModifier(name) {
        this.name = name;
        //return this.name = name;
        console.log(name);
    }
    return ReadonlyModifier;
}());
var example = new ReadonlyModifier("Rama");
console.log(example.name);
//example.name = "Latha";
//console.log(example.name);
var ReadOnly = /** @class */ (function () {
    function ReadOnly() {
        this.password = "Latha";
        //password = "Latha";
    }
    return ReadOnly;
}());
var r = new ReadOnly();
//r.password = "rama";
console.log(r.password);

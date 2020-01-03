"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var e_1, _a, e_2, _b, e_3, _c, _d;
var Person_1 = require("./Person");
var _ = __importStar(require("lodash"));
var user = new Person_1.Person("Latha", "Rama");
/*
user.firstName = "Latha";
user.lastName = "Pathuri";
*/
console.log(user);
var arr = [1, 2, 3, 4, 5, 6];
console.log("actual array : " + arr);
console.log("reverse array : " + _.reverse(arr));
//console.log(_.reverse(arr));
console.log(_.isArray(arr));
var a = 1234;
var b = 4567;
console.log(_.isArray(a));
console.log(_.add(a, b)); //it's expecting like this  add(augend: number, addend: number): number;
var map = new Map();
map.set(101, "Loukhya");
map.set(102, "Meghana");
map.set(103, "Lasya");
map.set(104, "Latha");
map.set(105, "Rama");
map.set(106, "Srivani");
map.set(107, "Bhargavi");
map.set(108, "Shirisha");
/*
//Iterate over map keys
for(let keyIterate of map.keys()){
  console.log(`Map keys = ${keyIterate}`);
}
//Iterate over map values
for(let valueIterate of map.values()){
  console.log(`Map values = ${valueIterate}`);
}
*/
//Iterate over map entries
console.log("Map entries is :: ");
try {
    for (var _e = __values(map.entries()), _f = _e.next(); !_f.done; _f = _e.next()) {
        var entryIterate = _f.value;
        console.log(entryIterate[0] + " " + entryIterate[1]);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
    }
    finally { if (e_1) throw e_1.error; }
}
console.log("hasKey 105 is : " + map.has(105));
console.log("size : " + map.size);
console.log("delete 104 is : " + map.delete(104));
console.log("hasKey 104 is : " + map.has(104));
console.log("size : " + map.size);
console.log("clear : " + map.clear());
console.log("size : " + map.size);
var softwareCourse = new Set();
//Chaining of add() method is allowed in TypeScript
softwareCourse.add("Core Java").add("Advanced Java").add("Oracle").add("HTML").add("CSS").add("Java Script").add("Bootstrap").add("Jquery").add("TypeScript");
//Returns Set data
console.log("The List of Set values:");
console.log(softwareCourse);
//Iterate over set Entries
console.log("softwareCourse with set entries : ");
try {
    for (var softwareCourse_1 = __values(softwareCourse), softwareCourse_1_1 = softwareCourse_1.next(); !softwareCourse_1_1.done; softwareCourse_1_1 = softwareCourse_1.next()) {
        var courses = softwareCourse_1_1.value;
        console.log(courses);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (softwareCourse_1_1 && !softwareCourse_1_1.done && (_b = softwareCourse_1.return)) _b.call(softwareCourse_1);
    }
    finally { if (e_2) throw e_2.error; }
}
//Iterate over set with forEach
console.log("softwareCourse with set forEach : ");
softwareCourse.forEach(function (value) {
    console.log(value);
});
var myMap = new Map();
myMap.set(1, "one").set(2, "two").set(3, "three");
console.log("Map entries is :: ");
try {
    for (var _g = __values(myMap.entries()), _h = _g.next(); !_h.done; _h = _g.next()) {
        var entry = _h.value;
        console.log(entry[0] + " " + entry[1]);
    }
}
catch (e_3_1) { e_3 = { error: e_3_1 }; }
finally {
    try {
        if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
    }
    finally { if (e_3) throw e_3.error; }
}
var date = new Date(2017, 4, 4, 17, 23, 42, 11);
var date1 = new Date();
console.log("today : " + date1);
console.log("full date : " + date);
console.log("FullYear : " + date.getFullYear());
console.log("Date : " + date.getDate());
console.log("Month : " + (date.getMonth() + 1));
console.log("Day : " + date.getDay());
console.log("Hours : " + date.getHours());
console.log("Minutes : " + date.getMinutes());
console.log("Seconds : " + date.getSeconds());
console.log("toTimeString() : " + date1.toTimeString());
console.log("valueOf() : " + date1.valueOf());
var symbol = Symbol("Rama");
var symbol1 = Symbol(12345);
console.log(symbol);
console.log(symbol1);
console.log(symbol === symbol1);
var sym = Symbol();
var obj = (_d = {},
    _d[symbol] = "Latha",
    _d);
console.log(obj[symbol]);
var ClassObj = /** @class */ (function () {
    function ClassObj() {
    }
    ClassObj.prototype[symbol] = function () {
        return "ClassObj";
    };
    return ClassObj;
}());
var clsObj = new ClassObj();
var className = clsObj[symbol]();
console.log(className);
//Symbol.hasInstance
/*
class Array1 {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof Array1);
*/
//Symbol.isConcatSpreadable
/*
const alpha = ['a', 'b', 'c'];
const numeric = [1, 2, 3];
let alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric);
numeric[Symbol.isConcatSpreadable] = false;
alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric);
*/
//Symbol.iterator
/*
const iterable1 = new Object();
iterable1[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
console.log([...iterable1]);
*/
//Symbol.match
/*
const regexp1 = /foo/;
// console.log('/foo/'.startsWith(regexp1));
// expected output: (Chrome) Error: First argument to String.prototype.startsWith must not be a regular expression
// expected output: (Firefox) Error: Invalid type: first can't be a Regular Expression
regexp1[Symbol.match] = false;
console.log('/foo/'.startsWith(regexp1));
// expected output: true
console.log('/baz/'.endsWith(regexp1));
// expected output: false
*/
//Symbol.replace
/*
class Replace1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return `s/${string}/${this.value}/g`;
  }
}
console.log('foo'.replace(new Replace1('bar')));
*/
function f() {
    console.log("f() evaluated");
    return function (target, propertyKey) {
        console.log("f() called");
    };
}
function g() {
    console.log("g() evaluated");
    return function (target, propertyKey) {
        console.log("g() called");
    };
}
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.method = function () {
        console.log("C class method called");
    };
    __decorate([
        f(),
        g()
    ], C.prototype, "method", null);
    return C;
}());
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.wish = message;
    }
    Greeter.prototype.wishMsg = function () {
        return "Hi..!" + this.wish;
    };
    Greeter = __decorate([
        sealed
    ], Greeter);
    return Greeter;
}());

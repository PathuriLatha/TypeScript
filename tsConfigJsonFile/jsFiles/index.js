"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
console.log(_.add(a, b));

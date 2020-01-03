import {Person} from './Person';
import * as _ from 'lodash';

let user = new Person("Latha", "Rama");
/*
user.firstName = "Latha";
user.lastName = "Pathuri";
*/
console.log(user);
let arr = [1, 2, 3, 4, 5, 6];
console.log(`actual array : ${arr}`);
console.log("reverse array : "+_.reverse(arr));
//console.log(_.reverse(arr));
console.log(_.isArray(arr));
let a = 1234;
let b = 4567;
console.log(_.isArray(a));
console.log(_.add(a, b));//it's expecting like this  add(augend: number, addend: number): number;


let map = new Map();

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
console.log(`Map entries is :: `);
for(let entryIterate of map.entries()){
  console.log(`${entryIterate[0]} ${entryIterate[1]}`);
}

console.log(`hasKey 105 is : ${map.has(105)}`);
console.log(`size : ${map.size}`);
console.log(`delete 104 is : ${map.delete(104)}`);
console.log(`hasKey 104 is : ${map.has(104)}`);
console.log(`size : ${map.size}`);
console.log(`clear : ${map.clear()}`);
console.log(`size : ${map.size}`);

let softwareCourse = new Set();

//Chaining of add() method is allowed in TypeScript
softwareCourse.add("Core Java").add("Advanced Java").add("Oracle").add("HTML").add("CSS").add("Java Script").add("Bootstrap").add("Jquery").add("TypeScript");

//Returns Set data
console.log("The List of Set values:");
console.log(softwareCourse);

//Iterate over set Entries
console.log("softwareCourse with set entries : ");
for(let courses of softwareCourse){
  console.log(courses);
}
//Iterate over set with forEach
console.log("softwareCourse with set forEach : ");
softwareCourse.forEach(
  function(value){
    console.log(value);
  }
);

let myMap = new Map();
myMap.set(1, "one").set(2, "two").set(3, "three");

console.log(`Map entries is :: `);
for(let entry of myMap.entries()){
  console.log(`${entry[0]} ${entry[1]}`);
}


let date = new Date(2017, 4, 4, 17, 23, 42, 11);
let date1 = new Date();
console.log(`today : ${date1}`);
console.log(`full date : ${date}`);
console.log(`FullYear : ${date.getFullYear()}`);
console.log(`Date : ${date.getDate()}`);
console.log(`Month : ${date.getMonth()+1}`);
console.log(`Day : ${date.getDay()}`);
console.log(`Hours : ${date.getHours()}`);
console.log(`Minutes : ${date.getMinutes()}`);
console.log(`Seconds : ${date.getSeconds()}`);

console.log(`toTimeString() : ${date1.toTimeString()}`);
console.log(`valueOf() : ${date1.valueOf()}`);

const symbol = Symbol("Rama");
let symbol1 = Symbol(12345);
console.log(symbol);
console.log(symbol1);
console.log(symbol === symbol1);
const sym = Symbol();
let obj = {
    [symbol]: "Latha"
};
console.log(obj[symbol]);
class ClassObj{
  [symbol](){
    return "ClassObj";
  }
}
let clsObj = new ClassObj();
let className = clsObj[symbol]();
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

function f(){
  console.log("f() evaluated");
  return function(target: any, propertyKey: string){
    console.log("f() called");
  }
}
function g(){
  console.log("g() evaluated");
  return function(target: any, propertyKey: string){
    console.log("g() called");
  }
}

class C{
  @f()
  @g()
  method(){
    console.log("C class method called");
  }
}

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter{
  wish : string;
  constructor(message: string){
    this.wish = message;
  }
  wishMsg(){
    return "Hi..!" + this.wish;
  }
}



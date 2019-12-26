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

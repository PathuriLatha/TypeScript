//export {}
let message = "Welcome to TypeScript";
console.log(message);

let x = 10;
const y = 20;

//let x = 30;
//const y = 30;

let sum;
const total = "Declaration of const variable";
sum = "sum";
let isComputer: boolean = true;
let number: number = 10;
let us: string = "Latha";
let wish: string = `Good evening ${us}!!`;
console.log(wish);
/*number = false;
number = "number"
name = false;
name = 15;
isComputer = "isComputer";
isComputer = 40;
*/
console.log(`x: ${x}, y: ${y}, sum: ${sum}, total: ${total}, isComputer: ${isComputer}, number: ${number}, name: ${us}`);

let n: null = null;
let u: undefined = undefined;
console.log(`null: ${n}, undefined: ${u}`);

let isBoolean: boolean = null;
let isName: string = undefined;
let unknownVar: unknown = 10;
console.log(`boolean: ${isBoolean}, string: ${isName}, unknown: ${unknownVar}`);

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];
console.log(`number[]: ${list1}, Array<number>: ${list2}`);

let person1: [string, number] = ['Latha', 426];
enum color{red, green, blue};
let c: color = color.green;
console.log(`color: ${c}, color[1]: ${color[1]}`);

let anyNumber: any = "variable type is any";
//console.log(`anyNumber: ${anyNumber}`);
anyNumber = 35;
//console.log(`anyNumber: ${anyNumber}`);
anyNumber = true;
console.log(`anyNumber: ${anyNumber}`);

/*let myVariable: unknown = 10;
function hasName(obj: any): obj is {name: string}{
  return !!obj &&
          typeof obj === "object" && "name" in obj
}
if(hasName(myVariable)){
  console.log(myVariable.name);
}
//myVariable();
//(myVariable as string).toUpperCase();
*/
let a;
a = 20;
a = false;
a = "myName";

let b= 20;
/*b = true;
b = "anotherName";
*/
console.log(`a: ${a}, b: ${b}`);


function add(num1: number, num2?: number){
  console.log(`num1: ${num1}, num2: ${num2}`);
  return num1+num2;
}
console.log(`add(10,20): ${add(10,20)}`);
console.log(`add(10): ${add(10)}`);


function fullName(person: {firstName: string, lastName: string}){
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName : "Latha",
  lastName : "Pathuri"
}

fullName(p);
//console.log("hi!!");
//console.log("hello!!")

interface Student{
  firstName: string;
  lastName?: string;
}
function optionalParameter(student: Student){
  console.log(`${student.firstName} ${student.lastName}`);
}
let details = {
  firstName : "Bhargavi"
}
optionalParameter(details);


class Employee{
  public empName: string;
  constructor(fName: string, lName?: string){
    this.empName = fName +" "+lName;
  }
  wish(){
    console.log(`Good evening ${this.empName}`);
  }
}
let emp = new Employee("Ravinder", "Reddy");
console.log(emp.empName);
emp.wish();


class Manager extends Employee{
  constructor(mfName: string, mlName?:string){
    super(mfName, mlName);
  }
  work(){
    console.log(`manager giving some task`);
  }
}
  let manager = new Manager("Rama", "Pathuri");
  manager.work();
  manager.wish();
  console.log(manager.empName);

let sampleName: any = "I am latha";
let nameLengthTag: number = (<string>sampleName).length;
console.log(nameLengthTag);

let nameLengthAS: number = (sampleName as string).length;
console.log(nameLengthAS);

let ex: any = 123456;
let exLengthTag: number = (<string>(ex.toString())).length;
let exLengthAs: number = (ex.toString() as string).length;

console.log(`${exLengthTag} ${exLengthAs}`);

console.log("hi!!");
console.log("Hello!!");

var arrInference = [1, "string", 23, false];
arrInference.push(true);
arrInference.push(null);
arrInference.push(undefined);
console.log(arrInference.length);

for(let xx in arrInference){
  console.log(arrInference[xx]);
}

function sumInference(a: number, b: number ){
  return a + b;
}
let totalInference: number = sumInference(10,20);
//let str: string = sumInference(10,20);

console.log(totalInference);

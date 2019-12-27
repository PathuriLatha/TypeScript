let sum = (n1: number, n2: number) => {
  return n1 + n2;
}

let sub = (n1: number, n2: number) : number => {
  return n1 - n2;
}

console.log(` sum is :: ${sum(40, 10)}`);
console.log(` sub is :: ${sub(40, 10)}`);


class Employee{
  name: string;
  yop: number;
  constructor(name: string, yop: number){
    this.name = name;
    this.yop = yop;
  }

  display = () => {
    return this.name+" "+this.yop;
  }
}

let emp = new Employee("Latha", 2017);
console.log(emp.display());

/*
function additionAny(a: number, b: number): number{
  return a + b;
}
function additionAny(a: string, b: string) : string{
  return a +" "+ b;
}

let addNum: number = additionAny(12, 13);
let addStr: string = additionAny("12", "13");

console.log(addNum);
console.log(addStr);
*/

function addition(a: string, b: string): string;
function addition(a: number, b: number): number;

function addition(a: any, b: any): any{
  return a + b;
}

console.log(addition(40, 10));
console.log(addition("Rama ", "Latha"));


function display(a: string, b: string): void{
  console.log( a + b );
}
function display1(a: number): void{
  console.log( a );
}

display("Lasya ", "Loukhya");
display1(120);

/*
function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a: any, b:any): any {
    return a + b;
}

console.log(add("Hello ", "Steve")); // returns "Hello Steve"
console.log(add(10, 20)); // returns 30
*/

function wish(wish: string, ...names: string[]){
  return wish + " " + names.join(", ") + "!";
}
/*function wish(...names: string[], wish: string){
  return wish + " " + names.join(", ") + "!";
}*/
console.log(wish("Hello..", "Rama", "Latha", "Srivani"));
console.log(wish("hi.."));
console.log(wish("Hey..", "Lasya"));

let details = (name: string, ...qualifications: string[]) => {
  return name + " " + qualifications.join(", ") + "!" ;
}
console.log(details("Latha", "SSC", "Inter", "B.Tech"));
console.log(details("Srivani", "SSC", "Inter", "B.Com", "M.B.A"));
console.log(details("Lasya", "5th"));
console.log(details("Loukhya"));


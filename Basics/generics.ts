function getArray<T>(items: T[]) : T[]{
  return new Array<T>().concat(items);
}

let arrNum = getArray<number>([100, 200, 300]);
let arrStr = getArray<string>(["Latha", "Rama", "Lasya"]);

arrNum.push(400);
//arrNum.push("Bhargavi");
//arrStr.push(600);
arrStr.push("Srivani");

console.log(arrNum);
console.log(arrStr);

function displayType<A, B>(id: A, name: B){
  return id +" "+ name;
}

let display = displayType<number, string>(102, "Latha");
console.log(display);

function detailsType<T, U>(id: T, name: U): void{
  console.log(`id.toString() : ${id.toString()}`);
  console.log(`name.toString() : ${name.toString()}`);
  // console.log(`id.toFixed() : ${id.toFixed()}`); //it will give error "toFixed does not exist on type T"
  // console.log(`name.toFixed() : ${name.toFixed()}`); //it will give error "toFixed does not exist on type U"
  // console.log(`id.toUpperCase() : ${id.toUpperCase()}`); //it will give error "toUpperCase does not exist on type T"
  // console.log(`name.toUpperCase() : ${name.toUpperCase()}`); //it will give error "toUpperCase does not exist on type U"
}

detailsType<number, string>(16, "Rama");

function displayNames<T>(names : T[]){
  return names.join(", ");
}

let names = displayNames<string>(["Latha", "Rama", "Bhargavi"]);
console.log(names);

//Generic constraints
interface Shape{
  drawing();
}
function drawShapes<T extends Shape>(shape: T[]){
  shape.forEach( shape => shape.drawing() );
}
class Circle implements Shape{
  drawing(){
    console.log("Drawing from Circle");
  }
}
class Triangle implements Shape{
  drawing(){
    console.log("Drawing from Triangle");
  }
}
class Rectangle implements Shape{
  drawing(){
    console.log("Drawing from Rectangle");
  }
}
let circle = new Circle();
let triangle = new Triangle();
let rectangle = new Rectangle();
let draw = drawShapes([circle, triangle, rectangle]);
//let draw1 = drawShapes(["circle", "rectangle", "triangle"]);

//Generic Class
class Person {
  firstName: string;
  lastName: string;
  constructor(fName: string, lName: string){
    this.firstName = fName;
    this.lastName = lName;
  }
}
function personDisplay<U extends Person>(person: U): void{
  console.log(`${person.firstName} ${person.lastName}`);
}
let person = new Person("Latha", "Pathuri");
personDisplay(person);

//Generic interface
interface KeyPair<T, U>{
  key : T;
  value : U;
}
let keyValue1 : KeyPair<number, string> = {key: 1, value : "Second"};
let keyValue2 : KeyPair<number, number> = {key: 2, value : 102};
let keyValue3 : KeyPair<string, string> = {key: "First String", value : "Second String"};
let keyValue4 : KeyPair<string, number> = {key: "First", value: 104};
console.log(`key1 : ${keyValue1.key}, value1 : ${keyValue1.value}`);
console.log(`key2 : ${keyValue2.key}, value2 : ${keyValue4.value}`);
console.log(`key3 : ${keyValue3.key}, value3 : ${keyValue4.value}`);
console.log(`key4 : ${keyValue4.key}, value4 : ${keyValue4.value}`);


interface IKeyValueProcessor<T, U>{
  processor(key: T, value: U) : void;
}
class KeyValueProcessor implements IKeyValueProcessor<number, string>{
  processor(key: number, value: string): void{
    console.log(`key = ${key}, value = ${value}`);
  }
}
let proc : IKeyValueProcessor<number, string> = new KeyValueProcessor();
proc.processor(1, "Latha");


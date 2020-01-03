
/*
  - First create one folder(project)
  - open terminal and go to directory(created folder)(project)
  - run this command "$ tsc --init" then it's created automatically "tsconfig.json" file
  - open tsconfig.json file and modify like below
    {
      "compilerOptions": {
        // Basic Options //
        "target": "es5",
        "module": "commonjs",
        "outDir": "./jsFiles",
        "rootDir": "./src",
        "noEmitOnError": true,
        "downlevelIteration": true,
        "strict": true,
        "noImplicitAny": false,
        "esModuleInterop": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
      }
    }
  - open terminal and run this command "$ npm init" then click on "enter" button then it's created "package.json" file
  - open package.json file and modify like below
      inside script add "start" property for compiling ts jsFiles
      "start": "tsc && node jsFiles/index.js",
  - create "src" folder in created folder(project)
  - create on ts file with name as "index.ts" inside src folder
  - write typeScript code inside index.js file
  - open terminal with project directory and run this command "npm start"
*/

console.log("hello..!");
console.log("successfully setting up the project...");

function testing(){
 // property: string;
  return function(target: any, propertyKey: string){
    console.log(target);
    console.log(propertyKey);
   // console.log(descriptor);
  }
}
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

class Test{
  @testing()
  method(){
    console.log("method() calling");
  }
  text(){
    console.log("text() calling");
  }
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
//constructor override
function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T){
  return class extends constructor{
    newProperty = "new property";
    hello = "override";
  }
}

function f(){
  console.log("f() evaluated");
  return function(target: any, propertyKey: string){
    console.log("f() called");
  }
}

@classDecorator
class ConstructorOverrider{
  property = "property";
  hello : string;
  constructor(msg: string){
    this.hello = msg;
  }
  @f()
  add(){
    console.log("add() calling");
  }
}

let constructorOverride = new ConstructorOverrider("Hello...!!!");
console.log(constructorOverride);

//Accessor Decorators (setters and getters)
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}


function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
       // console.log(descriptor.configurable == value);
       // console.log(descriptor.configurable);
       // console.log(value);
    };
}

//Property Decorators
/*
class GreeterProperty {
    @format("Hello, %s")
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}
import "reflect-metadata";

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
*/

//Parameter Decorators
/*
class GreeterParameter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @validate
    greet(@required name: string) {
        return "Hello " + name + ", " + this.greeting;
    }
}
import "reflect-metadata";

const requiredMetadataKey = Symbol("required");

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    let method = descriptor.value;
    descriptor.value = function () {
        let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    throw new Error("Missing required argument.");
                }
            }
        }
        return method.apply(this, arguments);
    }
}
*/

console.log("hello..!");
console.log("successfully setting up the project...");

enum DaysOfTheWeek{
  MON = 1, TUE, WED, THU, FRI, SAT, SUN
}


/*let day : DaysOfTheWeek;
day = DaysOfTheWeek.THU;
console.log(```day : ${day}`);
*/

let date = new Date();
let today = date.getDay();
console.log(`today : ${today}`);
//console.log(`typeof date : ${typeof date.toString()}, date: ${date}`);

for (let item in DaysOfTheWeek) {
  //console.log("Number(item) typeof: "+typeof Number(item));
  //console.log(`item typeof : ${typeof item}`);
   if (item === today.toString() ) {
        console.log(`Today is : ${DaysOfTheWeek[item]}`);
    }
}


class Person{
  firstName: string;
  lastName: string;

  constructor(fName: string, lName: string){
    this.firstName = fName;
    this.lastName = lName;
  }

  getFullName(){
    return this.firstName +" "+this.lastName;
  }
}

class Admin extends Person{

}
class Manager extends Person{

}

let admin = new Admin("admin", "admin");
let manager = new Manager("manager", "manager");

function personEcho<T extends Person>(user: T): T{
  return user;
}

let admins = personEcho(admin);
let managers = personEcho(manager);

/*console.log(`admins : ${admins.firstName} ${admins.lastName}`);
console.log(`managers : ${managers.firstName} ${managers.lastName}`);
*/

console.log(`admin fullName : ${admins.getFullName()}`);
console.log(`manager fullName : ${managers.getFullName()}`);

class ReadonlyModifier{
  //readonly name;
  constructor(readonly name: string){
    //return this.name = name;
    console.log(name);
  }
}
let example = new ReadonlyModifier("Rama");
console.log(example.name);
//example.name = "Latha";
//console.log(example.name);

class ReadOnly{
  readonly password = "Latha";

  //password = "Latha";
}
let r = new ReadOnly();
//r.password = "rama";
console.log(r.password);

/** @type {number} */
var x;
console.log(typeof x);
x = 0;
console.log(typeof x);
x = "string";
console.log(typeof x);
x = false;
console.log(typeof x);

/*class CType{
  constructor(){
    /** @type { number | undefined } */
  /*  this.abc = undefined;
    this.def ;
  }
}
let cType = new CType();
cType.abc = 0;
cType.abc = "String";
console.log(typeof cType.abc);
*/

function C() {
    this.constructorOnly = 0
    this.constructorUnknown = undefined
}
C.prototype.method = function() {
    this.constructorOnly = false // error
    this.constructorUnknown = "checking" // OK, the type is string | undefined
    return this.constructorUnknown;
}

console.log(C.prototype.method());



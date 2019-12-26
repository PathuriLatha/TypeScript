/*function greeter(person: string[]){
	return "Hello, "+person[0];
}
//let user = "Latha";
let user = ["1", "2", "3", "4", "5"];
//document.body.textContent = greeter(user);
console.log(greeter(user));
*/
/*
  Hi Team,
    Today i worked on TypeScript
      - practiced Namespaces and Modules
      - practiced TypeScript compiler arguments
      - creating an npm project using tsconfig json file
      - learn installing libraries from npm
    Blockers:
      - Unable to get typescript plugins into intelliJ IDEA
    Next Task:
      - I will work on remaining types of TypeScript
  - TypeScript compiler arguments
  - Using tsconfig json file
  - Creating an npm project
  - Installing libraries
  -
  In Intellij ID i didn't get plugins
    if we run this cmd --init it's  Initializes a TypeScript project and creates a tsconfig.json file.
*/

class Student{
	fullName : string;
	constructor(public firstName: string, public middleName: string,  public lastName: string){
		this.fullName = firstName+" "+middleName+" "+lastName;
	}
}

interface Person{
	firstName: string;
	lastName: string;
}

function greeter(person: Person){
		return person.firstName +" "+person.lastName;
}

let user = {firstName : "Latha", lastName : "Pathuri"};
/*Person.firstName = "rama";
Person.lastName = "pathuri";*/
console.log(greeter(user));


let student = new Student("Rama", "Pathuri", "Reddy");

console.log(greeter(student));
console.log(student.fullName);

var result = greeter(student) + " "+student.middleName;
console.log(result);


function display(name) {
   if (typeof name == "string") {
      console.log(name);
   } else {
      var i;
      for (i = 0; i < name.length; i++) {
         console.log(name[i]);
      }
   }
}

display("Pathuri");
console.log("Printing names array....");
display(["Advith", "Meghana", "LoukhyaSri", "Lasya"]);


var arr:number[]|string[];
var i:number;
arr = ["1", "latha", "3", "rama"];
for(i = 0;i<arr.length;i++) {
   console.log(arr[i])
}

console.log("Hello..!!");
console.log("hi..!");

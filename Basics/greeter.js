/*function greeter(person: string[]){
    return "Hello, "+person[0];
}
//let user = "Latha";
let user = ["1", "2", "3", "4", "5"];
//document.body.textContent = greeter(user);
console.log(greeter(user));
*/
/*
  - TypeScript compiler arguments
  -  if we run this cmd --init
    it's  Initializes a TypeScript project and creates a tsconfig.json file.
*/
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return person.firstName + " " + person.lastName;
}
var user = { firstName: "Latha", lastName: "Pathuri" };
/*Person.firstName = "rama";
Person.lastName = "pathuri";*/
console.log(greeter(user));
var student = new Student("Rama", "Pathuri", "Reddy");
console.log(greeter(student));
console.log(student.fullName);
var result = greeter(student) + " " + student.middleName;
console.log(result);
function display(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
display("Pathuri");
console.log("Printing names array....");
display(["Advith", "Meghana", "LoukhyaSri", "Lasya"]);
var arr;
var i;
arr = ["1", "latha", "3", "rama"];
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("Hello..!!");
console.log("hi..!");

var sum = function (n1, n2) {
    return n1 + n2;
};
var sub = function (n1, n2) {
    return n1 - n2;
};
console.log(" sum is :: " + sum(40, 10));
console.log(" sub is :: " + sub(40, 10));
var Employee = /** @class */ (function () {
    function Employee(name, yop) {
        var _this = this;
        this.display = function () {
            return _this.name + " " + _this.yop;
        };
        this.name = name;
        this.yop = yop;
    }
    return Employee;
}());
var emp = new Employee("Latha", 2017);
console.log(emp.display());
function addition(a, b) {
    return a + b;
}
console.log(addition(40, 10));
console.log(addition("Rama ", "Latha"));
function display(a, b) {
    console.log(a + b);
}
function display1(a) {
    console.log(a);
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
function wish(wish) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return wish + " " + names.join(", ") + "!";
}
/*function wish(...names: string[], wish: string){
  return wish + " " + names.join(", ") + "!";
}*/
console.log(wish("Hello..", "Rama", "Latha", "Srivani"));
console.log(wish("hi.."));
console.log(wish("Hey..", "Lasya"));
var details = function (name) {
    var qualifications = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        qualifications[_i - 1] = arguments[_i];
    }
    return name + " " + qualifications.join(", ") + "!";
};
console.log(details("Latha", "SSC", "Inter", "B.Tech"));
console.log(details("Srivani", "SSC", "Inter", "B.Com", "M.B.A"));
console.log(details("Lasya", "5th"));
console.log(details("Loukhya"));

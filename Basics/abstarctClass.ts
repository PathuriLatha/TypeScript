abstract class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(string): Person;
}

class Employee extends Person {
    empCode: number;

    constructor(name: string, code: number) {
        super(name);
        this.empCode = code;
    }

    find(name:string): Person {
        return new Employee(name, 1);
    }
}

let emp: Person = new Employee("Latha", 1001);
emp.display();

let emp2: Person = emp.find("Rama");
// console.log(emp2);
console.log(emp2.find(emp2.name));
/*
let emp3: Person = new Person("Bhargavi"); // can't create object for abstract class
emp3.display();
*/

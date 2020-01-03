class Person{
  name : string;
  address : string;
  marks : number;
  constructor(name: string, address: string, marks: number){
    this.name = name;
    this.address = address;
    this.marks = marks;
  }
}
class Student extends Person{
  grade : string;
  constructor(grade: string, person : Person){
    super(person.name, person.address, person.marks);
    this.grade = grade;
  }

}

let person = new Person("Latha", "Hyderabad", 78);
let student = new Student('A', person);

console.log(student.name+" "+student.address+" "+student.marks+" "+student.grade);


class AbstractClass {
  constructor() {
    if (new.target === AbstractClass) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
  }
}

class Derived extends AbstractClass {
  constructor() {
    super();
  }
}

const a = new AbstractClass();
const b = new Derived();

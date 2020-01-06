import { Person } from "./moduleAgumentation";

declare module "./moduleAgumentation"{
  interface Person{
    age: number;
    detailsOfPerson(detail: string);
  }
}

Person.prototype.detailsOfPerson = (detail: string) => `Person is ${detail}`;

const person = new Person();
person.age = 17;
let val = person.typeOfPerson = "Student";
person.detailsOfPerson(val);
console.log(person);

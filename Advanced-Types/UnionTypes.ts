interface Student{
  name: string;
  marks: number;
}
interface Employee{
  name: string;
  salary: number;
}

/*
const unionTest: Student | Employee = {
  name: "Latha"
};
console.log(unionTest.name);
 */

type unionTest = Student | Employee;
let test : unionTest;
test.name = "Latha";

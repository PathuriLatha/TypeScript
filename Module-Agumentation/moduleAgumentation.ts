class Student{
  marks: string;
}
interface Student{
  percentage: string;
  passORFail(yesOrNo: boolean);
}

Student.prototype.passORFail = (item) => console.log(item);
const student = new Student();
student.marks = "529";
student.percentage = "88%";

//student.passORFail(true);//it's giving run time error
student.passORFail(true);
console.log(student);

/* class Food {
  cheese: string;
}

interface Food {
  bacon: string;
}

const food  = new Food();
food.bacon = "nice bacon";
food.cheese = "sweet cheese";

console.log(food); */

export class Person{
  typeOfPerson: string;
  details(item: string){
    console.log(this.typeOfPerson+" "+item);
  }
}

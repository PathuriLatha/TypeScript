export class Person {
  fullName: string;
  constructor(firstName: string, lastName?: string){
    console.log(`This is a constructor`);
    this.fullName = firstName+" "+lastName;
  }
  /*
  firstName: string;
  lastName: string;
  */
}
/*
let user = new Person("Latha");
//user.firstName = "Latha";
*/

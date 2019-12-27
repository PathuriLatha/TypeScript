console.log("hello..!");
console.log("successfully setting up the project...");

enum DaysOfTheWeek{
  MON = 1, TUE, WED, THU, FRI, SAT, SUN
}


/*let day : DaysOfTheWeek;
day = DaysOfTheWeek.THU;
console.log(`day : ${day}`);
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


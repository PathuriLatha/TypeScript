function myFunction(item: string): number{
  return Number(item);
}

console.log(myFunction("12"));
console.log(myFunction("13"));

class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters} meters.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog!");
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

interface Car{
  model();
}
class BMW implements Car{
  constructor(){
    console.log("BMW constructor");
  }
  model(){
    return "from BMW model";
  }
}
let models = new BMW();
console.log(models);
console.log(models.model());


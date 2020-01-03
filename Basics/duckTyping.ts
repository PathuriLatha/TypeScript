class Dog {
  sound = "barking";
}
class Lion {
  sound = "roaring";
}
class Goat {
  sound = "bleat";
  swim(){
        console.log("Cannot Swim!");
    }
}
let lion: Lion = new Dog(); // substitutes
let dog: Dog = new Lion(); // substitutes
let lionTwo: Lion = new Goat();
let goat: Goat = new Goat();
//let goatTwo: Goat = new Lion(); // IDE & compiler error
let dogTwo: Dog = new Goat();
console.log("Lion Sound: "+lion.sound);
console.log("Dog sound: "+dog.sound);
console.log("Lion Two sound: "+lionTwo.sound);
console.log("Goat sound: "+goat.sound);
console.log("Dog Two sound: "+dogTwo.sound);


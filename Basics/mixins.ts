/*
// Disposable Mixin
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
}

// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}

class SmartObject {
    constructor() {
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }

    interact() {
        this.activate();
    }
}

interface SmartObject extends Disposable, Activatable {}
applyMixins(SmartObject, [Disposable, Activatable]);

let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);

/////////////////////////////////////////
//  In your runtime library somewhere  //
/////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
 */


type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}

class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// Create a new class by mixing `Timestamped` into `User`
const TimestampedUser = Timestamped(User);

// Instantiate the new `TimestampedUser` class
const user = new TimestampedUser("Latha Pathuri");

// We can now access properties from both the `User` class
// and our `Timestamped` mixin in a type-safe manner
console.log(user.name);
console.log(user.timestamp);
console.log(Date.now());

function Tagged<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    tag: string | null;

    constructor(...args: any[]) {
      super(...args);
      this.tag = null;
    }
  };
}
// Create a new class by mixing `Tagged` into `User`
const TaggedUser = Tagged(User);

// Instantiate the new `TaggedUser` class
const userTagged = new TaggedUser("John Doe");

// We can now assign values to any property defined in either
// the `User` class or our `Tagged` mixin in a type-safe manner.
// TypeScript will type-check those assignments!
userTagged.name = "Rama";
userTagged.tag = "pathuri";

console.log(userTagged);

function Activatable<TBase extends Constructor>(Base: TBase){
  return class extends Base{
    isActivated = false;
    activate(){
      this.isActivated = true;
    }
    deactivate(){
      this.isActivated = false;
    }
  };
}

const ActivatableUser = Activatable(User);
const activableUser = new ActivatableUser("Laxmi");

console.log(activableUser.isActivated);
console.log( activableUser.activate() );
console.log(activableUser.isActivated);
console.log( activableUser.deactivate() );
console.log(activableUser.isActivated);

const SpecialUser = Activatable(Tagged(Timestamped(User)));
const userSpecial = new SpecialUser("Loukhya Sri");
userSpecial.

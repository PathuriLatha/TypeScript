function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}


let greeter = new Greeter("Good afternoon..!!");
console.log(greeter.greet());

/*   ############# Class Decorator ############ */
const classLog = <T>(originalConstructor: new(...args: any[]) => T) => {
    function newConstructor(... args: any[]) {
        console.log("Arguments: ", args.join(", "));
        new originalConstructor(args);
    }
    newConstructor.prototype = originalConstructor.prototype;
    return <typeof Pet><any>newConstructor;
}
@classLog
class Pet {
    constructor(name: string, age: number) {}
}
new Pet("Latha", 12);

/*   ############# Method Decorator ############ */
/*
const methodLog = (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<number[]>) => {
    return {
        value: function( ... args: any[]) {
            console.log("Arguments: ", args.join(", "));
            const result = descriptor.value.apply(target, args);
            console.log("Result: ", result);
            return result;
        }
    }
}
class Calculator {
    @methodLog
    add(x: number, y: number) {
        return x + y;
    }
}
new Calculator().add(1, 3);
*/

/*   ############# Property Decorator ############ */
/*
const propertyLog = (target: any, key: string | symbol) => {
    let value = target[key];

    const getter = () =>  {
        console.log("Getting value: ", value);
        return <typeof Box><any>value;
    };
    const setter = (val: any) => {
        console.log("Setting value: ", val);
        value = val;
    }
    Reflect.deleteProperty[key];
    Reflect.defineProperty(target, key, {
        get: getter,
        set: setter
    });
}
class Box<T> {
    @propertyLog
    item: T;
}
const numberInABox = new Box<number>();
numberInABox.item = 12;
numberInABox.item;
*/

/*   ############# Parameter Decorator ############ */
const LOGGED_PARAM_KEY = "logged_param";

//Parameter decorator
const  loggedParam = (target: Object, key: string | symbol, index: number) => {
    const loggedParams: number[] = Reflect.getOwnMetadata(LOGGED_PARAM_KEY, target, key) || [];
    loggedParams.push(index);
    Reflect.defineMetadata(LOGGED_PARAM_KEY, loggedParams, target, key);
}

//Method decorator
const logMethodParams = (target: Object, key: string, descriptor: TypedPropertyDescriptor<Function>) => {
    const loggedParams: number[] = Reflect.getOwnMetadata(LOGGED_PARAM_KEY, target, key) || [];
    return {
        value: function( ... args: any[]) {
            console.log("Logged params: ", loggedParams.map(index => args[index]).join(", "));
            return descriptor.value.apply(target, args);
        }
    }
}

//Class decorator
const logConstructorParams: ClassDecorator = <T>(target: new(...args: any[]) => T) => {
    const loggedParams: number[] = Reflect.getOwnMetadata(LOGGED_PARAM_KEY, target) || [];
    function newConstructor(... args: any[]) {
        console.log("Logged params: ", loggedParams.map(index => args[index]).join(", "));
        new target(args);
    }
    newConstructor.prototype = target.prototype;
    return newConstructor;
}

@logConstructorParams
class Box {
    private items = new Array<string>();

    constructor(@loggedParam private initialItem: string) {
        this.items.push(initialItem);
    }

    @logMethodParams
    addItem(@loggedParam item: string) {
    this.items.push(item);
    }
}

new Box("first").addItem("second");

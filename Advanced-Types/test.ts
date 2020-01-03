
function testing<T, U>(first: T, second: U): T & U {
    const result: Partial<T & U> = {};
    for (const prop in first) {
        if (first.hasOwnProperty(prop)) {
            (result as T)[prop] = first[prop];
        }
    }
    for (const prop in second) {
        if (second.hasOwnProperty(prop)) {
            (result as U)[prop] = second[prop];
        }
    }
    return result as T & U;
}


class Person {
    constructor(public name: string) { }
}

interface Loggable {
    display(name: string): void;
}

class ConsoleLogger implements Loggable {
    display(name) {
        console.log(`Hello, I'm ${name}.`);
    }
}

const disp = testing(new Person('Latha'), ConsoleLogger.prototype);
disp.display(disp.name);

interface PartialMain{
  title: string;
  description: string;
}

const partialTest: Partial<PartialMain> = {
  title : "partialTest"
}
console.log(partialTest.title);








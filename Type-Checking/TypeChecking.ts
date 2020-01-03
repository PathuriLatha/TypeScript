class C {
    constructorOnly: number;
    constructorUnknown: undefined;
    methodOnly: any;
    constructor() {
        this.constructorOnly = 0
        //  this.constructorUnknown = "Unkown from constructor"
    }
    method() {
        //this.constructorOnly = true
        //this.constructorUnknown = "Unkown"
        this.methodOnly = 'ok'
        return this.methodOnly+" from method";
    }
    method2() {
        this.methodOnly = true
        return this.methodOnly+ " from method2";
    }
}

let c = new C();
console.log(c.method());
console.log(c.method2());

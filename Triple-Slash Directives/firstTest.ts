let firsName: string = "Latha";
let lastName: string = "Pathuri";
let qualification: string = "B.Tech";
let yop: number = 2017;
namespace Testing{
  export class Addition{
    n1: number;
    n2: number;

    constructor(x: number , y: number){
      this.n1 = x;
      this.n2 = y;
    }
    add(): number{
      return this.n1 + this.n2;
    };
  }
}
/*
let sum = new Addition(12, 13);
console.log(sum.add());
*/
export{firsName, lastName, qualification, yop};

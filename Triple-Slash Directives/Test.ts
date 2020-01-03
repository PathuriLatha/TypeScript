class Test{
  n1: number;
  n2: number;
  constructor(x: number, y:number){
    this.n1 = x;
    this.n2 = y;
  }
  add(): number{
    let sum: number = this.n1 + this.n2;
    return sum;
  }
}

let adding = new Test(12, 13);
adding.add();

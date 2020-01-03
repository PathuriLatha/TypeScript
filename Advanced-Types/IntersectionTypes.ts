/*
interface IStudent {
    id: string;
    age: number;
}

interface IWorker {
    companyId: string;
}

type Test1 = IStudent & IWorker;

let Details: Test1;

//Details.age = 5;
Details.companyId = "Latha411";
Details.id = 'ID3241';
 */


interface FirstI {
  c: string;
  d: string;
}

interface SecondI {
  c: number;
  e: string
}

type FirstSecond = FirstI & SecondI;
//type YX = (Y & X) | number | string;
type SecondFirst = SecondI & FirstI;

let first : FirstSecond;
let second : SecondFirst;

/*
  first.c = 3;
  second.c = 3;
  first.c = "3";
  second = "4";
*/

interface  ThirdI{ d: boolean; }
interface FourthI { e: string; }
interface FifthI { f: number; }

interface SixthI { x: ThirdI; }
interface SeventhI { x: FourthI; }
interface EightI { x: FifthI; }

type Test678 = SixthI & SeventhI & EightI;

let abc: Test678 = {
    x: {
        d: true,
        e: 'testing',
        f: 3
    }
};

console.log('abc:', abc);

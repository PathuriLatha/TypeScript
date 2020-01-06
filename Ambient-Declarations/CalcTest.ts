/// <reference path="Calc.d.ts" />
var obj = new ModuleDeclaration.Calc();
//obj.doSum("This is a string");
console.log(obj.doSum(10));
let date = new Date();
let time = date.getTime();
console.log("time :: "+time);
let msg;
if(time >=1 && time < 12){
  msg = obj.wishMsg("Hello.. Good Morning..!");
}
else if(time >= 12 && time < 14){
  msg = obj.wishMsg("Hello.. Good Afternoon..!");
}
else if(time >=14 && time <= 19){
  msg = obj.wishMsg("Hello.. Good Evening..!");
}
else{
  msg = obj.wishMsg("Hello.. Good Night..!");
}
console.log(msg);

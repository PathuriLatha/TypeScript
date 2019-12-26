console.log("hello..!");
console.log("successfully setting up the project...");

enum DaysOfTheWeek{
  MON, TUE, WED, THU, FRI, SAT, SUN
}

let day : DaysOfTheWeek;
day = DaysOfTheWeek.THU;

if(day === DaysOfTheWeek.THU){
  console.log(`Today is : ${day}`);
}

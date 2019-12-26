"use strict";
console.log("hello..!");
console.log("successfully setting up the project...");
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 0] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 1] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 2] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THU"] = 3] = "THU";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 4] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 5] = "SAT";
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 6] = "SUN";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var day;
day = DaysOfTheWeek.THU;
if (day === DaysOfTheWeek.THU) {
    console.log("Today is : " + day);
}

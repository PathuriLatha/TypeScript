var Testing;
(function (Testing) {
    function add(num1, num2) {
        return num1 + num2;
    }
    Testing.add = add;
})(Testing || (Testing = {}));
///<reference path="./testing.ts" />
var sum = Testing.add(20, 40);
console.log(sum);

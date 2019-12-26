/*FileName :Circle.ts*/
/// <reference path = "IShape.ts" />
var CircleDrawing;
(function (CircleDrawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Circle is drawn");
        };
        return Circle;
    }());
    CircleDrawing.Circle = Circle;
})(CircleDrawing || (CircleDrawing = {}));
/*FileName :Triangle.ts */
/// <reference path = "IShape.ts" />
var TriangleDrawing;
(function (TriangleDrawing) {
    var Triangle = /** @class */ (function () {
        function Triangle() {
        }
        Triangle.prototype.draw = function () {
            console.log("Triangle is drawn");
        };
        return Triangle;
    }());
    TriangleDrawing.Triangle = Triangle;
})(TriangleDrawing || (TriangleDrawing = {}));
/* FileName : TestShape.ts */
/// <reference path = "IShape.ts" />
/*
/// <reference path = "Circle.ts" />
/// <reference path = "Triangle.ts" />
*/
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new CircleDrawing.Circle());
drawAllShapes(new TriangleDrawing.Triangle());

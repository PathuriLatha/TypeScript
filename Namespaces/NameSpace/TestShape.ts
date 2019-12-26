/*FileName :Circle.ts*/

/// <reference path = "IShape.ts" />
namespace CircleDrawing {
   export class Circle implements Drawing.IShape {
      public draw() {
         console.log("Circle is drawn");
      }
   }
}
/*FileName :Triangle.ts */

/// <reference path = "IShape.ts" />
namespace TriangleDrawing {
  export class Triangle implements Drawing.IShape {
    public draw() {
       console.log("Triangle is drawn");
    }
  }
}

/* FileName : TestShape.ts */

/// <reference path = "IShape.ts" />
/*
/// <reference path = "Circle.ts" />
/// <reference path = "Triangle.ts" />
*/
function drawAllShapes(shape:Drawing.IShape) {
  shape.draw();
}
drawAllShapes(new CircleDrawing.Circle());
drawAllShapes(new TriangleDrawing.Triangle());

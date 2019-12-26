///<reference path="./IShape.ts" />
///<reference path="./Circle.ts" />
///<reference path="./Triangle.ts" />

function drawnAllShapes(shape: Drawing.IShape) {
  shape.draw();
}
drawnAllShapes(new CircleDrawing.Circle);
drawnAllShapes(new TriangleDrawing.Triangle);

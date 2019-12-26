///<reference path="./IShape.ts" />
namespace TriangleDrawing{
  export class Triangle implements Drawing.IShape{
     public draw(){
      console.log("Circle is drawn");
     }
  }
}

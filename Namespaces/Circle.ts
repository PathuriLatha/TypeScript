///<reference path="./IShape.ts" />
namespace CircleDrawing{
  export class Circle implements Drawing.IShape{
     public draw(){
      console.log("Circle is drawn");
     }
  }
}

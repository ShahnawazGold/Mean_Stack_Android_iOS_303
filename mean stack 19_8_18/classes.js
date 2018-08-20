// class HOME2{
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     public name :string;
//     constructor() {
//     }
//     setNAMESS(name :string):void {
//         this.name = name;
//     }
//      getNAMES() :string {
//         return this.name;
//     }
// }
// var obj : HOME2 = new HOME2();
// obj.setNAMESS("shah");
// obj.getNAMES();
// console.log("hellow  " +obj.getNAMES() );
///////==================Inhertance ======================
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("Area of the circle:  " + this.Area);
    };
    return Circle;
}(Shape));
var obj = new Circle(223);
var obj2 = new Shape(566);
console.log(obj2.Area);
obj.disp();

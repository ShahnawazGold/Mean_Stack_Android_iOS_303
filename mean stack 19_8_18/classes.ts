
// class HOME2{
     
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



class Shape {

    public Area:number ;
    
    constructor(a:number) { 
       this.Area = a ;
    } 

}

class Circle extends Shape { 

    disp():void { 
       console.log("Area of the circle:  "+this.Area) ;
    } 
 }

 var obj = new Circle(223); 
 var obj2 = new Shape (566);
 console.log (obj2.Area);
 obj.disp()
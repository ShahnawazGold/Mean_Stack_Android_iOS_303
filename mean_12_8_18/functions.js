// var a :string = "shah";
// console.log(a);
// function disp_details(id, name, mail_id) {
//     console.log("ID:", id);
//     console.log("Name", name);
//     if (mail_id != undefined)
//        console.log("Email Id", mail_id);
//  }
//  disp_details(123, "John");
// disp_details(111, "mary", "mary@xyz.com");
// var msg = function() { 
//     return "hello world";  
//  } 
//  console.log(msg());
// var res = function (n1 :number, n2:number) {
//      return n1*n2;
// }
// console.log(res(2,6));
// //
// function factorial(number) {
//     if (number <= 0) {         // termination case
//        return 1; 
//     } else {     
//        return (number * factorial(number - 1));     // function invokes itself
//     } 
//  }; 
//  console.log(factorial(6));      // outputs 720
(function () {
    var x = "Hello!!";
    console.log(x);
})();
var foo = function (x) { return x * 3; };
console.log(foo(100)); //outputs 110 
var foos = function (x) {
    x = 14 + x;
    console.log(x);
};
foos(100);
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " is numeric");
    }
    else if (typeof x == "string") {
        console.log(x + " is a string");
    }
};
func(12);
func("Tom");

// Ionic Starter App


angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
    
      StatusBar.styleDefault();
    }
  });
})

.factory('MathService', function() {
  var factory = {};
  
  factory.multiply = function(a, b) {
     return a * b
  }
  return factory;
})

.service('CalcService', function(MathService){

  this.square = function(a) {
     return MathService.multiply(a,a);
  }

})




.controller('mainController',function ($scope) {

  console.log("wellcome");
  
  
})

.controller('headerController',function ($scope,CalcService) {

  console.log("wellcome header");

//   $scope.student = {

//     firstName: " ",
//     lastName: " ",
//     fees:500,
    
//       subjects:[

//         {name:'Physics',marks:70},

//         {name:'Chemistry',marks:80},
//         {name:'Math',marks:65},
//         {name:'English',marks:75},
//         {name:'Hindi',marks:67}
//       ],
    
//       fullName: function() {

//         var studentObject;
//         studentObject = $scope.student;
//         return studentObject.firstName + " " + studentObject.lastName;

//       }
//  };

//==================service and factory===================

$scope.square = function() {
  $scope.result = CalcService.square($scope.number);
}
  
})


.controller('centerController',function ($scope) {

  console.log("wellcome center");
  
})






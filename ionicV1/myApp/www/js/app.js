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
// .controller('mainColtroller', function($scope,$cordovaPrinter) {
//   console.log("main controller");

//   $scope.print = function() {

//     if($cordovaPrinter) {

//         $cordovaPrinter.print("https://www.nraboy.com");

//     } else {

//         alert("Printing is not available on device");
//     }
// }
 
// })

.controller('mainController',function ($scope) {
  
  console.log("weelcome");

  
})





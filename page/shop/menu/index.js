(function mymenu() {

  var menuController=function($scope,$rootScope,$state){
    console.log("mymenu component!");
    $scope.toPage=function(id){
      $state.go("toPage",{id:id});
    }
  };
  //http://localhost:3000/source1/page/shop/menu/index.html
  var menu = {
    restrict: 'E',
    templateUrl: 'http://localhost:3000/source1/page/shop/menu/index.html',
    bindings:{links:'='},
    controllerAs:"menuController",
    controller:menuController
  };

  menuModule = angular.module('mymenu', ['ui.router'])
    .component('mymenu', menu);
})();
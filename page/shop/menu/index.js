(function mymenu() {

  var menuController=function($scope,$rootScope,$state){
    console.log("mymenu component!");
    $('#menu').css("display","none");
    $scope.toPage=function(id){
      console.log("TOPAGE");
      $scope.id=id;
      $scope.id1=id+1;
      $scope.id2=id+2;
      $('#menu').css("display","block");
      $state.go("toPage",{id:id});
    }
  };
  //http://localhost:3000/source1/page/shop/menu/index.html
  var menu = {
    restrict: 'E',
    templateUrl: 'http://localhost:3000/web/page/shop/menu/index.html',
    bindings:{links:'='},
    controllerAs:"menuController",
    controller:menuController
  };

  menuModule = angular.module('mymenu', ['ui.router'])
    .component('mymenu', menu);
})();
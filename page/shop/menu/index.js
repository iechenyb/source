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
var url = basePath+"page/shop/menu/index.html";
  var menu = {
    restrict: 'E',
    templateUrl: url,
    bindings:{links:'='},
    controllerAs:"menuController",
    controller:menuController
  };

  menuModule = angular.module('mymenu', ['ui.router'])
    .component('mymenu', menu);
})();
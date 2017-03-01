(function mygg() {

  var ggController=function($scope,$rootScope,$state){
    console.log("myggwindow component!");
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
var url=basePath+"page/shop/ggwindow/index.html";
  var gg = {
    restrict: 'E',
    templateUrl:url,
    bindings:{links:'='},
    controllerAs:"ggController",
    controller:ggController
  };
  menuModule = angular.module('mygg', ['ui.router'])
    .component('mygg', gg);
})();
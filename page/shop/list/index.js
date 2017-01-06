(function mylist() {
  var listController=function($scope,$rootScope,$state){
    console.log("mylist component!");
    id=Math.ceil(Math.random()*7)+2;
    if(id<6){
      $scope.id=id;
      $scope.id1=id+1;
      $scope.id2=id+2;
    }else{
      $scope.id=id%7+1;
      $scope.id1=id%7+1;
      $scope.id2=id%7+2;
    }
    if(id==0){
      id=1;
      id1=2;
      id=3;
    }
  };
  //http://localhost:3000/source1/page/shop/menu/index.html
  var list = {
    restrict: 'E',
    templateUrl: 'http://localhost:3000/web/page/shop/list/index.html',
    bindings:{links:'='},
    controllerAs:"listController",
    controller:listController
  };

  listModule = angular.module('mylist', ['ui.router'])
    .component('mylist', list);
})();
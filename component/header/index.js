(function myheader() {

  var headerController=function($scope,$rootScope,$state){
    console.log("myheader component!");
    $scope.urls=[];
    for(var i=1;i<=12;i++){
      var tmp ={name:'菜单'+i,href:i};//uisref
      $scope.urls.push(tmp);
    }
    $scope.toPage=function(id){
      $state.go("toPage",{id:id});
    }
  };
  var header = {
    restrict: 'E',
    templateUrl: 'http://localhost:3000/source1/component/header/index.html',
    bindings:{links:'='},
    controllerAs:"myheader",
    controller:headerController
  };

  headerModule = angular.module('myheader', ['ui.router'])
    .component('myheader', header);
})();
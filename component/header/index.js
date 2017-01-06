(function myheader() {

  var headerController=function($scope,$rootScope,$state){
    console.log("myheader component!");
    $scope.toPage=function(id){
      $state.go("toPage",{id:id});
    }
  };
  var header = {
    restrict: 'E',
    templateUrl: 'http://localhost:3000/web/component/header/index.html',
    bindings:{links:'='},
    controllerAs:"myheader",
    controller:headerController
  };

  headerModule = angular.module('myheader', ['ui.router'])
    .component('myheader', header);
})();
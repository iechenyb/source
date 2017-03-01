(function myheader() {
  var headerController=function($scope,$rootScope,$state,$http,$location){
    bathPath1 = $location.protocol() +"://"+$location.host()+":"+$location.port()+"/";
    console.log("myheader component!"+ bathPath1);
    $scope.toPage=function(id){
      $state.go("toPage",{id:id});
    }
  };
  var url = basePath+'component/header/index.html';
  var header = {
    restrict: 'E',
    templateUrl: url,
    bindings:{links:'='},
    controllerAs:"myheader",
    controller:headerController
  };
  headerModule = angular.module('myheader', ['ui.router'])
    .component('myheader', header);
})();
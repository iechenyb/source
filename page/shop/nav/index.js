(function mytop() {
  var topController=function($scope,$rootScope,$state){
    $scope.toPage=function(id){
      $state.go("toPage",{id:id});
    }
  };
  var url = basePath+"page/shop/nav/index.html";
  var top = {
    restrict: 'E',
    templateUrl: url,
    bindings:{links:'='},
    controllerAs:"topController",
    controller:topController
  };
  headerModule = angular.module('mytop', ['ui.router'])
    .component('mytop', top);
})();
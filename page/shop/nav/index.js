(function mytop() {
  var topController=function($scope,$rootScope,$state){
    $scope.toPage=function(id){
      $state.go("toPage",{id:id});
    }
  };
  var top = {
    restrict: 'E',
    templateUrl: 'http://localhost:3000/web/page/shop/nav/index.html',
    bindings:{links:'='},
    controllerAs:"topController",
    controller:topController
  };
  headerModule = angular.module('mytop', ['ui.router'])
    .component('mytop', top);
})();
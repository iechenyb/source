(function mypubu() {
  var pubuController=function($scope,$rootScope,$state){
    console.log("mypubu component!");
    $('#my-scrollspy').scrollspy({
      animation: 'slide-left',
      delay: 500
    });
    $('#my-scrollspy1').scrollspy({
      animation: 'slide-right',
      delay: 500
    });
    $('#my-scrollspy2').scrollspy({
      animation: 'slide-top',
      delay: 500
    });
    $('#my-scrollspy3').scrollspy({
      animation: 'slide-bottom',
      delay: 500
    });
    $('#my-scrollspy4').scrollspy({
      animation: 'slide-up',
      delay: 500
    });
  };
 var url=basePath+"page/shop/pubu/index.html";
  var pubu = {
    restrict: 'E',
    templateUrl: url,
    bindings:{links:'='},
    controllerAs:"pubuController",
    controller:pubuController
  };

  pubuModule = angular.module('mypubu', ['ui.router'])
    .component('mypubu', pubu);
})();
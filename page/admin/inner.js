/**
 * Created by DHUser on 2016/12/15. 
 */
var innerApp = angular.module("innerApp",["ui.router","ngAnimate"]);
myApp.controller("innerController",function($scope,$stateParams,$q,$http){
  console.log($stateParams.data);
});
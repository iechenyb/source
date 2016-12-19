/**
 * Created by DHUser on 2016/12/14.
 */
var myApp = angular.module("myApp",["ui.router","myfooter","myheader","myInterceptor"]);

var moban = function ($scope, $http, $stateParams,$rootScope,$state) {
    $scope.data=[1,3,4,5,6];
    this.links=[{name:'菜单#',href:'/x/y'}];
    $scope.id=1;
};
var mobanf = function ($scope,$state) {
    console.log("moban");
    var id = parseInt($state.params.id);
   if(id>7){
       $scope.id = id-7;
       $scope.id1 = id%7+1;
       $scope.id2 = id%7+2 ;
   }else {
       $scope.id = id;
       $scope.id1 = id + 1;
       $scope.id2 = id + 2;
   }
}
myApp.controller("mycontroller",moban);
myApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state("mobanf",{
            url:"/index",
            abstract:true,
            controller:mobanf,
            controllerAs:'moban',
            templateUrl:"moban.html"
        }).state("toPage",{
            url:"toPage",///{id} 都可以，{id}的方式uri会发生变化
            params:{id:null},
            controller:mobanf,
            controllerAs:"mobanf"
        });
        $urlRouterProvider.otherwise("/toPage");
    }
]).component('myApp', {
 template: '<div class="app"><div ui-view>1231</div></div>',
 restrict: 'E'
 });
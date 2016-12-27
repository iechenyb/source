/**
 * Created by DHUser on 2016/12/14.
 */
var myApp = angular.module("myApp",["ui.router","myfooter","myheader","myInterceptor"]);
var moban = function ($scope, $http, $stateParams,$rootScope,$state) {
    $scope.data=[1,3,4,5,6];
    this.links=[];
    $scope.links=[];
    for(var i=1;i<=10;i++){
        var tmp ={name:'菜单'+i,uisref:i};//uisref
        //var tmp ={name:'菜单*'+i,href:i};//使用超链接
        this.links.push(tmp);
        $scope.links.push(tmp);
    }
    $scope.id=1;
    $scope.id1=2;
    $scope.id2=3;
    console.log("moban");
};
var mobanf = function ($scope,$state) {
    console.log("mobanf");
    var id = $state.params.id;
    if(id==null){
        id=1;
    }else{
        id=parseInt(id);
    }
    if(id>6){
        $scope.id = id%7+1;
        $scope.id1 = id%7+2;
        $scope.id2 = id%7+3 ;
    }else {
        $scope.id = id;
        $scope.id1 = id + 1;
        $scope.id2 = id + 2;
    }
}
myApp.controller("mycontroller",moban);
myApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state("moban",{
            url:"/index",
            abstract:true,
            controller:moban,
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
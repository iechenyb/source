/**
 * Created by DHUser on 2016/12/14.
 */
var menu=["秒杀","优惠券","闪购","拍卖","服装城","兔吧超市","生鲜","全球购","兔吧金融"];
var myApp = angular.module("myApp",["ui.router","myfooter","myheader","mytop","myInterceptor","mymenu","mygg","mypubu","mylist"]);
/*myApp.factory('myInterceptor', ['$log', function($log) {
    $log.debug('$log is here to show you that this is a regular factory with injection');
    var myInterceptor = {};
    return myInterceptor;
}]);*/
var moban = function ($scope, $http, $stateParams,$rootScope,$state) {
    this.links=[];
    $scope.links=[];
    for(var i=0;i<9;i++){
        var tmp ={name:menu[i],href:i,id:'m'+i};//uisref
        this.links.push(tmp);
        $scope.links.push(tmp);
    }
    $scope.id=1;
    $scope.id1=2;
    $scope.id2=3;
    console.log("moban");
    $scope.show=function(menuid){
        $('#'+menuid).dropdown({justify: '#'+menuid});
    };
};
var mobanf = function ($scope,$state) {
    var id = $state.params.id;
    $('img.lazy').lazyload({
        effect : 'fadeIn'
    });
    console.log("mobanf id="+id);
    $scope.name="chenyb"+id;
    //$('#menu').css("display","none");
    $scope.hidden = function(){
        $('#menu').css("display","none");
    }
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
    function($stateProvider, $urlRouterProvider,$httpProvider, $locationProvider) {
        //$httpProvider.interceptors.push('myInterceptor');
      /*  $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('authInterceptor');*/
        $stateProvider.state("moban",{
            url:"/index",
            abstract:true,
            controller:moban,
            controllerAs:'moban',
            templateUrl:"minfor.html"
        }).state("toPage",{
            url:"toPage",
            params:{id:null},
            views:{
                "gg":{
                url:"toPage",///{id} 都可以，{id}的方式uri会发生变化
                params:{id:null},
                controller:mobanf,
                controllerAs:"mobanf",
                templateUrl:"minfor.html"
                }
            }
        });
        $urlRouterProvider.otherwise("/toPage");
    }
]).component('myApp', {
    template: '<div class="app"><div ui-view>1231</div></div>',
    restrict: 'E'
}).factory('authInterceptor', function($rootScope, $q, $cookies, $injector) {
    var state;
    return {
        // Add authorization token to headers
        request: function (config) {
            config.headers = config.headers || {};
            console.log("send request!");
            if ($cookies.get('token')) {
                config.headers.Authorization = 'Bearer ' + $cookies.get('token');
            }
            return config;
        },
        // Intercept 401s and redirect you to login
        responseError: function (response) {
            if (response.status === 401) {
                console.log("hand request!"+response.status)
                (state || (state = $injector.get('$state'))).go('login');
                // remove any stale tokens
                $cookies.remove('token');
                return $q.reject(response);
            }else {
                console.log("handle request!"+response.status)
                return $q.reject(response);
            }
        }
    }
    });
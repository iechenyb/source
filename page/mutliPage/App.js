var myApp = angular.module("myApp", ["ui.router"]);
/**
 * 写死的二级目录访问方法
 */
myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/PageTab");

    $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "PageTab.html",
            controller:function ($scope) {
                $scope.urls=["PageTab.Page1","PageTab.Page2","PageTab.Page3"];
            }
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "Page1.html",
            controller:function($scope){
                $scope.list=["a1","a2","a3"];
            }
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "Page2.html",
            controller:function($scope){
                $scope.list=["b1","b2","b3"];
            }
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "Page3.html",
            controller:function($scope){
                $scope.list=["c1","c2","c3"];
            }
        });
});
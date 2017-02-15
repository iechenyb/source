/**
 * Created by DHUser on 2017/2/14.
 */
angular.module("app",["ui.router","ngAnimate"])
.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state("kh1",{
            url:"",
            templateUrl:"rl/index.html",
            controller:function($scope) {
                $scope.name="chenyb";
            }
        });
        $urlRouterProvider.otherwise("/kh1/index");
    }
]).controller("headController",function($scope){
    console.log("xxxx");
    $scope.name="chenyb";
});
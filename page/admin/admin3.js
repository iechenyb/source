/**
 * Created by DHUser on 2016/12/14.
 */
var tree;
var myApp = angular.module("myApp",["ui.router"]);
var defaultController = function ($scope, $http, $stateParams,$rootScope,$state) {
    console.log("defaultController");
    $scope.name="chenyb";
    $scope.ddd =7;
    var data = [];
    $http.get("data.json").success(function(d){
        data = d;
    }).error(function(error){
      console.log(error);
    });
    tree = $('#firstTree').tree({
        dataSource: function(options, callback) {
            // 模拟异步加载
            setTimeout(function() {
                callback({data: options.products || data});
            }, 400);
        },
        multiSelect: false,
        cacheItems: true,
        folderSelect: false
    });
    tree.on('selected.tree.amui', function (event, data) {
        console.log("treenodename="+data.selected[0].title);
        $scope.name=data.selected[0].title;
        $scope.ddd = data.selected[0].id;
        $state.go("toWorkSapce",{name:$scope.name,ddd:$scope.ddd});
        //控制器仅仅执行一次，并且是在第一次加载的时候执行！
    });
};
var count=1;
var c1 = function ($scope,$http) {
    console.log("toWorkSpace");
    $http.get("list.json").success(function(d){
        d.push( "页面跳转次数共计:"+count+++"次");
        $scope.list = d;
    }).error(function(error){
        console.log(error);
    });
}
myApp.controller("mycontroller",defaultController);
myApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // $httpProvider.interceptors.push('myInterceptor');
        $stateProvider.state("home",{
            url:"/home",
            abstract:false,
            template:"<h1>待到来年九月八，我花开后百花杀。<br>冲天香阵透长安，满城尽带黄金甲。</h1>"
        }).state("about",{
            url:"/about",
            template:"<h1>三十年功尘与土，八千里路云和月。<br>莫等闲，白了少年头，空悲切。</h1>"
        }).state("contacts",{
            url:"/contacts",
            template:"<h1>靖康耻犹未雪，臣子恨何时灭，<br>驾长车踏破贺兰山缺。壮士饥餐胡虏肉，<br>笑谈渴饮匈奴血。待从头，收拾旧山河，朝天阙。</h1>"
        }).state("mydefine",{
            url:"/xxx",
            template:"<h1>hehe，<br>heihei，<br>如何根据树节点更新当前窗口的内容！</h1>"
        }).state("toWorkSapce",{
            url:"/toWorkSapce",
            params:{name:null,ddd:null},//必须定义参数类型，否则传递参数也无法获取
            templateUrl:"inner3.html",controller:c1
        });
        $urlRouterProvider.otherwise("/home");
    }
])/*.component('myApp', {
 template: '<div class="app"><div ui-view>1231</div></div>',
 restrict: 'E'
 })*/;
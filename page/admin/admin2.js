/**
 * Created by DHUser on 2016/12/14.
 */
var data = [
    {
        title: '苹果公司1',
        type: 'folder',
        products: [
            {
                id:1,
                title: 'iPhone',
                type: 'item'
            },
            {
                id:2,
                title: 'iMac',
                type: 'item'
            },
            {
                id:3,
                title: 'MacBook Pro',
                type: 'item'
            }
        ]
    },
    {
        title: '微软公司',
        type: 'item'
    },
    {
        title: '苹果公司2',
        type: 'folder',
        products: [
            {
                id:1,
                title: 'iPhone',
                type: 'item'
            },
            {
                id:1,
                title: 'iMac',
                type: 'item'
            },
            {
                id:1,
                title: 'MacBook Pro',
                type: 'item'
            }
        ]
    },
    {
        title: 'GitHub',
        type: 'item',
        attr: {
            icon: 'am-icon-github'
        }
    } ,{
        title: '苹果公司3',
        type: 'folder',
        products: [
            {
                id:1,
                title: 'iPhone',
                type: 'item'
            },
            {
                id:1,
                title: 'iMac',
                type: 'item'
            },
            {
                id:1,
                title: 'MacBook Pro',
                type: 'item'
            }
        ]
    },
];
var tree;
var myApp = angular.module("myApp",["ui.router","myfooter","myheader","myInterceptor"]);
var defaultController = function ($scope, $http, $stateParams,$rootScope,$state) {
    $scope.name="chenyb";
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
        $scope.name=data.selected[0].title;//使用多级目录的时候，为什么一直使用的是缺省的控制器
        var id = data.selected[0].id;
        $state.go("home.one",{id:id});//一级目录
        //$state.go("home.one.two",{id:id});//二级目录
        //$state.go("home.one.two",{id:id,id1:id+1});//一次访问,跳三级目录
        //$state.go("home.xxx.two",{id:id,id1:id+1});//一次访问 不可用
        $state.go("home.two",{id:id,id1:id+1});//两级目录
    });
};
var mk1Controller = function($scope, $http){
    console.log("mk1Controller");
};
var mk2Controller = function($scope, $http){
    console.log("mk2Controller");
};
var mk3Controller = function($scope, $http){
    console.log("mk3Controller");
};
myApp.controller("mycontroller",defaultController);
myApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // $httpProvider.interceptors.push('myInterceptor');
        $stateProvider.state("home",{
            url:"/home",
            abstract:false,
            templateUrl:"inner.html"
        }).state("home.one",{
            url:"/{id}",
            templateUrl:"inner2.html",controller:mk1Controller,controllerAs:"mk1Controller"
        }).state("home.one.two",{
            url:"/{id}/{id1}",
            templateUrl:"inner3.html",controller:function($scope){
                console.log("xxxxxxxxx");
            },controllerAs:"mk2Controller"
        }).state("home.two",{
            url:"/{id}/:id1",
            templateUrl:"inner4.html",controller:mk3Controller,controllerAs:"mk3Controller"
        }).state("about",{
            url:"/about",
            template:"<h1>三十年功尘与土，八千里路云和月。<br>莫等闲，白了少年头，空悲切。</h1>"
        }).state("contacts",{
            url:"/contacts",
            template:"<h1>靖康耻犹未雪，臣子恨何时灭，<br>驾长车踏破贺兰山缺。壮士饥餐胡虏肉，<br>笑谈渴饮匈奴血。待从头，收拾旧山河，朝天阙。</h1>"
        }).state("mydefine",{
            url:"/xxx",
            template:"<h1>hehe，<br>heihei，<br>如何使用路径参数，请在点击树节点的时候观察uri的路径变化！问题：为什么多级路径对应的controller不能正常执行！？</h1>"
        });
        $urlRouterProvider.otherwise("/home");
    }
]).component('myApp', {
 template: '<div class="app"><div ui-view>1231</div></div>',
 restrict: 'E'
 });
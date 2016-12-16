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
var myApp = angular.module("myApp",["ui.router"]);

var treeload = function ($scope, $http, $stateParams,$rootScope,$state) {
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
        $scope.name=data.selected[0].title;
        var id = data.selected[0].id;
        $state.go("home.in",{id:id});
    });
};
myApp.controller("mycontroller",treeload);
myApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // $httpProvider.interceptors.push('myInterceptor');
        $stateProvider.state("home",{
            url:"/home",
           /* abstract:true,*/
            template:"<h1>待到来年九月八，我花开后百花杀。<br>冲天香阵透长安，满城尽带黄金甲。</h1>"
        }).state("home.in",{
            url:"/{id}",
            views:{
                "c1":{
                    url: '/{id}',
                    template: "<h1>嵌入页面测试。<br>我是home页面的子页面。</h1>"
                }
            }
        }).state("about",{
            url:"/about",
            template:"<h1>三十年功尘与土，八千里路云和月。<br>莫等闲，白了少年头，空悲切。</h1>"
        }).state("contacts",{
            url:"/contacts",
            template:"<h1>靖康耻犹未雪，臣子恨何时灭，<br>驾长车踏破贺兰山缺。壮士饥餐胡虏肉，<br>笑谈渴饮匈奴血。待从头，收拾旧山河，朝天阙。</h1>"
        }).state("mydefine",{
            url:"/xxx",
            template:"<h1>hehe，<br>heihei，<br>haha</h1>"
        });
        $urlRouterProvider.otherwise("/home");
    }
])/*.component('myApp', {
 template: '<div class="app"><div ui-view>1231</div></div>',
 restrict: 'E'
 })*/;
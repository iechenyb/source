/**
 * Created by DHUser on 2016/12/14.
 */
var data = [
    {
        title: '苹果公司1',
        type: 'folder',
        products: [
            {
                title: 'iPhone',
                type: 'item'
            },
            {
                title: 'iMac',
                type: 'item'
            },
            {
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
                title: 'iPhone',
                type: 'item'
            },
            {
                title: 'iMac',
                type: 'item'
            },
            {
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
                title: 'iPhone',
                type: 'item'
            },
            {
                title: 'iMac',
                type: 'item'
            },
            {
                title: 'MacBook Pro',
                type: 'item'
            }
        ]
    },
];
var tree;
var myApp = angular.module("myApp",["ui.router","ngAnimate"]);
/*myApp.run(function($rootScope, $state, $stateParams){
 $rootScope.$state = $state;
 $rootScope.$stateParams = $stateParams;
 $rootScope.$state.isLogin = false;
 });*/
var treeload = function ($scope, $http, $stateParams,$rootScope,$state) {
    console.log('initTree');
    $scope.name="chenyb";
    $scope.arrs=["a1","a2","a3"];
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
        $state.go("chtml",{data:'testvalue'});
    });
    console.log("x="+$stateParams.data);
};
myApp.controller("mycontroller",treeload);
myApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // $httpProvider.interceptors.push('myInterceptor');
        $stateProvider.state("home",{
            url:"/home",
            template:"<h1>待到来年九月八，我花开后百花杀。<br>冲天香阵透长安，满城尽带黄金甲。</h1>"
        }).state("about",{
            url:"/about",
            template:"<h1>三十年功尘与土，八千里路云和月。<br>莫等闲，白了少年头，空悲切。</h1>"
        }).state("contacts",{
            url:"/contacts",
            template:"<h1>靖康耻犹未雪，臣子恨何时灭，<br>驾长车踏破贺兰山缺。壮士饥餐胡虏肉，<br>笑谈渴饮匈奴血。待从头，收拾旧山河，朝天阙。</h1>"
        }).state("mydefine",{
            url:"/xxx",
            template:"<h1>hehe，<br>heihei，<br>haha</h1>"
        })
            .state('view', {
            url:'/view',
            views: {
                "c0":{
                    url: '/resettree',
                    template: '',
                    controller: treeload,
                    template: 'dddddddddddddddddddddd'
                },
                "c1":{
                    url: '/resettree',
                    template: 'eeeeeeeeeeeeeeeeeeeeee'
                }
            }
        })
            .state('tree', {
            url:'/tree',
            views:{
                "treeview": {
                    url: '/tree',
                    templateUrl: 'menu.html',
                    controller: treeload,
                    controllerAs: 'myApp'
                }
            }
        })
            .state('chtml', {
            url:'/chtml',
            views:{
                "c0": {
                    params: {data: null},
                    url: '/chtml',
                    templateUrl: 'inner.html'/*,
                     controllerProvider : function($rootScope){
                     //if($rootScope.$state.isLogin == false){
                     // $rootScope.$state.go("/tree");
                     //}
                     return function(){};
                     }*/,
                    controller: treeload,
                    controllerAs: 'treeload'
                },
                "treeview": {
                    url: '/tree',
                    templateUrl: 'menu.html',
                    controller: treeload,
                    controllerAs: 'myApp'
                }
            }
        });
        $urlRouterProvider.otherwise("/home");
    }
])/*.component('myApp', {
 template: '<div class="app"><div ui-view>1231</div></div>',
 restrict: 'E'
 })*/;
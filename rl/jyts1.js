/**
 * Created by DHUser on 2017/1/23.
 */
var jyts = function () {
    this.links = [
        {name: dh_links.jyts.title, uisref: 'jyts'}
    ];
};
var rl = function ($state, $scope, $filter, $http) {
    //校验日期
    function regyyyymm() {
        var today = new Date();
        if ($state.params.yyyymm == "") {
            $state.go('jyts.rl', {yyyymm: $filter('date')(today, 'yyyyMM')}, {location: 'replace'});
        }
        else {
            var regyyyymm = /[12]\d{3}(0[1-9]|1[0-2])/;
            if (!regyyyymm.test($state.params.yyyymm)) {
                $state.go('jyts.rl', {yyyymm: $filter('date')(today, 'yyyyMM')}, {location: 'replace'});
            }
            else {
                $scope.yy = $state.params.yyyymm.substring(0, 4);
                $scope.mm = $state.params.yyyymm.substring(4, 6);
            }
        }
    }

    regyyyymm();
    //月份加
    $scope.addrl = function () {
        var temp = new Date($scope.yy, $scope.mm, 1);
        $state.go('jyts.rl', {yyyymm: $filter('date')(temp, 'yyyyMM')}, {location: 'replace'});
    };
    //月份减
    $scope.subrl = function () {
        var temp = new Date($scope.yy, $scope.mm - 2, 1);
        $state.go('jyts.rl', {yyyymm: $filter('date')(temp, 'yyyyMM')}, {location: 'replace'});
    };

    if ($state.params.yyyymm == "") return;
    //构建当前月天array
    var temprlarray = new Array(new Date($scope.yy, $scope.mm, 0).getDate());
    //空出1号前几天
    $scope.kong = new Array(new Date($scope.yy, $scope.mm - 1, 1).getDay());
    for (var i = 0; i < $scope.kong.length; i++) {
        $scope.kong[i] = i;
    }
    //获取日历并标注
    $http.get('/RESTfull/jyts/' + $scope.yy + '/' + $scope.mm + '.json')
        .success(function (data) {
            if (jsonPD(data)) {
                for (var i = 0; i < temprlarray.length; i++) {
                    temprlarray[i] = {
                        value: i + 1,
                        data: (data.data.indexOf(i + 1) != -1) ? true : false
                    }
                }
                $scope.rlarray = temprlarray;
                if (data.data.indexOf(Number($state.params.dd)) == -1) {
                    var today = new Date();
                    if (data.data.indexOf(today.getDate()) != -1 && $scope.yy == today.getFullYear() && today.getMonth() + 1 == $scope.mm) {
                        $scope.chosedate({value: today.getDate(), data: true});
                    }
                    else {
                        $scope.chosedate({value: data.data[0], data: true});
                    }
                }
                else {
                    $scope.chosedate({value: $state.params.dd, data: true});
                }
            }
        })
        .error(function (error) {
            for (var i = 0; i < temprlarray.length; i++) {
                temprlarray[i] = {
                    value: i + 1,
                    data: false
                }
            }
            $scope.rlarray = temprlarray;
            console.log(error);
        });

    $scope.chosedate = function (x) {
        if (x.data) {
            $scope.rlarray.forEach(function (item) {
                if (x.value == item.value) {
                    item.class = 'chose';
                }
                else {
                    item.class = null;
                }
            })
            $state.go('jyts.rl.text', {yyyymm: $scope.yy + $scope.mm, dd: x.value}, {location: 'replace'});
        }
        return false;
    }
};
angular.module('app', ['ui.router'])
    .config(function ($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.interceptors.push('myInterceptor');
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/index/');
        $stateProvider
            .state('jyts', {
                url: '/index',
                templateUrl: 'jyts.html',
                abstract: true,
                controller: jyts,
                controllerAs: 'jyts'
            })
            .state('jyts.rl', {
                url: '/{yyyymm}',
                templateUrl: 'rl.html',
                controller: rl,
                controllerAs: 'rl'
            })
            .state('jyts.rl.text', {
                url: '/{dd}',
                templateUrl: function getTemplateUrl($params) {
                    return '/RESTfull/jyts/' + $params.yyyymm.substring(0, 4) + '/' + $params.yyyymm.substring(4, 6) + '/' + $params.dd + '.do';
                },
                controller: function ($scope, $state) {
                    $scope.$parent.dd = $state.params.dd;
                }
            });
    })
    .component('app', {
        template: '<div class="app"><div ui-view></div></div>',
        restrict: 'E'
    })
    .controller('rlController', function ($scope) {
        $scope.link = dh_links.jyts;
    });


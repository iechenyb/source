var gywm = function () {
  this.links = [
    {name: '公司简介', uisref: 'gywm.gsjj'},
    {name: '公司牌照', uisref: 'gywm.gspz'},
    {name: '信息公示', uisref: 'gywm.xxgs'}
  ];
};
angular.module('app', ['ui.router', 'dhheader','dhfooter','dhtabs'])
  .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/index/gsjj');
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.path(),
        normalized = path.toLowerCase();
      if (normalized == '/index/xxgs') {
        return normalized + '/gsxx';
      }
      if (path !== normalized) {
        return normalized;
      }
    });
    $stateProvider
      .state('gywm', {
        url: '/index',
        abstract: true,
        templateUrl: 'gywm.html',
        controller: gywm,
        controllerAs: 'gywm'
      })
      .state('gywm.gsjj', {
        url: '/gsjj',
        templateUrl: 'gsjj.html'
      })
      .state('gywm.gspz', {
        url: '/gspz',
        templateUrl: 'gspz.html'
      })
      .state('gywm.xxgs', {
        url: '/xxgs',
        templateUrl: 'xxgs/xxgs.html'
      })
      .state('gywm.xxgs.gsxx', {
        url: '/gsxx',
        templateUrl: 'xxgs/gsxx.html'
      })
      .state('gywm.xxgs.glry', {
        url: '/glry',
        templateUrl: 'xxgs/glry.html',
        controller: function ($http,$scope) {
          $scope.person = [];
          $http.get('/RESTfull/gywm/glry.json')
            .success(function (data) {
              if (jsonPD(data)){
                $scope.person = data.data;
              }
            })
            .error(function (error) {
              console.log(error);
            });
        }
      })
      .state('gywm.xxgs.cyry', {
        url: '/cyry',
        templateUrl: 'xxgs/cyry.html',
        controller: function ($http,$scope) {
          $scope.person = [];
          $http.get('/RESTfull/gywm/cyry.json')
            .success(function (data) {
              if (jsonPD(data)){
                $scope.person = data.data;
              }
            })
            .error(function (error) {
              console.log(error);
            });
        }
      })
      .state('gywm.xxgs.cwxx', {
        url: '/cwxx',
        templateUrl: 'xxgs/cwxx.html',
        controller: function ($http,$scope) {
          $scope.person = [];
          $http.get('/RESTfull/gywm/cwxx.json')
            .success(function (data) {
              if (jsonPD(data)){
                $scope.cwxx = data.data;
              }
            })
            .error(function (error) {
              console.log(error);
            });
        }
      })
      .state('gywm.xxgs.gdxx', {
        url: '/gdxx',
        templateUrl: 'xxgs/gdxx.html'
      })
      .state('gywm.xxgs.lsqk', {
        url: '/lsqk',
        templateUrl: 'xxgs/lsqk.html',
        controller: function ($http,$scope) {
          $scope.person = [];
          $http.get('../../RESTfull/gywm/lsqk.json')
            .success(function (data) {
              if (jsonPD(data)){
                $scope.lsqk = data.data;
              }
            })
            .error(function (error) {
              console.log(error);
            });
        }
      })
      .state('gywm.xxgs.fzjg', {
        url: '/fzjg',
        templateUrl: 'xxgs/fzjg.html'
      })
      .state('gywm.xxgs.cxjl', {
        url: '/cxjl',
        templateUrl: 'xxgs/cxjl.html'
      });

  })
  .component('app', {
    template: '<div class="app"><div ui-view></div></div>',
    restrict: 'E'
  });



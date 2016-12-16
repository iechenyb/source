var gsgg = function ($scope,$rootScope,$http,$state) {
  $scope.state = $state;
  this.links = [
    {name: '保证金调整公告', href: '/page/bzjgg'},
    {name: '公司公告', uisref: 'gsgg'},
  ];
  $http.get('../../RESTfull/gsgg/list.json')
    .success(function (data) {
      $scope.list = data.data;
      $scope.list.forEach(function (value) {
        value.uisref = "gsgg.text({name: '" + value.value + "'})";
      });
    })
    .error(function (error) {
      console.log(error);
    });
};
angular.module('app', ['ui.router', 'dhheader', 'dhfooter', 'dhscrolltabs', 'myInterceptor'])
  .config(function ($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.interceptors.push('myInterceptor');
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/index/list');
    $stateProvider
      .state('gsgg', {
        url: '/index',
        templateUrl: 'gsgg.html',
        controller: gsgg,
        controllerAs: 'gsgg'
      })
      .state('gsgg.list', {
        url: '/list',
        templateUrl: 'list.html',
      })
      .state('gsgg.text', {
        url: '/text/{name}',
        templateUrl: function getTemplateUrl($params) {
          return $params.name;
        }
      });
  })
  .component('app', {
    template: '<div class="app"><div ui-view></div></div>',
    restrict: 'E'
  });



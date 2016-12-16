var bzjgg = function ($scope, $http, $rootScope,$state) {
  this.links = [
    {name: '保证金调整公告', uisref: 'bzjgg'},
    {name: '公司公告', href: '/page/gsgg'},
  ];
  $scope.person = [];
  $http.get('../../RESTfull/bzjgg/bzjggrq.json')
    .success(function (data) {
      $scope.bzjggrq = data.data;
      $scope.bzjggrq.forEach(function (value) {
        value.uisref = "bzjgg.text({name: '" + value.value + "'})";
      });
      $state.go("bzjgg.text",{name:$scope.bzjggrq[0].value});
    })
    .error(function (error) {
      console.log(error);
    });
};
angular.module('app', ['ui.router', 'dhheader', 'dhfooter', 'dhscrolltabs', 'myInterceptor'])
  .config(function ($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.interceptors.push('myInterceptor');
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/index');
    $stateProvider
      .state('bzjgg', {
        url: '/index',
        templateUrl: 'bzjgg.html',
        controller: bzjgg,
        controllerAs: 'bzjgg'
      })
      .state('bzjgg.text', {
        url: '/text/{name}',
        templateUrl: function getTemplateUrl($params) {
          return $params.name;
        },
      });
  })
  .component('app', {
    template: '<div class="app"><div ui-view></div></div>',
    restrict: 'E'
  });



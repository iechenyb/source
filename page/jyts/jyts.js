var jyts = function ($scope, $http, $rootScope,$state) {
  this.links = [
    {name: '增值服务', href: '/'},
    {name: '交易提示', uisref: 'jyts'},
    {name: '开户服务', href: '/'},
    {name: '交易服务', href: '/'}
  ];
  $scope.person = [];
  $http.get('../../RESTfull/jyts/jytsrq.json')
    .success(function (data) {
      $scope.jytsrq = data.data;
      $scope.jytsrq.forEach(function (value) {
        value.uisref = "jyts.text({name: '" + value.value + "'})";
      });
      $state.go("jyts.text",{name:$scope.jytsrq[0].value});
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
      .state('jyts', {
        url: '/index',
        templateUrl: 'jyts.html',
        controller: jyts,
        controllerAs: 'jyts'
      })
      .state('jyts.text', {
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



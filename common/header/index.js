(function dhheader() {
  var controller = function ($scope) {
    this.links
  };
  var header = {
    restrict: 'E',
    templateUrl: 'http://localhost:3000/web/common/header/index.html',
    bindings: {links: '='},
    controllerAs: 'dhheader',
    controller: controller
  };
  headerModule = angular.module('dhheader', ['ui.router'])
    .component('dhheader', header);
})();
(function dhtabs() {
  var controller = function () {
    this.tabs
  };
  var tabs = {
    restrict: 'E',
    templateUrl: 'common/tabs/index.html',
    bindings: {tabs: '='},
    controllerAs: 'dhtabs',
    controller: controller
  };
  headerModule = angular.module('dhtabs', ['ui.router'])
    .component('dhtabs', tabs);
})();
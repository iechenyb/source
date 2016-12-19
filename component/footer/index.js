(function myfooter() {
  var footer = {
    restrict: 'E',
    templateUrl: 'http://localhost:3000/source1/component/footer/index.html',
  };
  footerModule = angular.module('myfooter', ['ui.router'])
    .component('myfooter', footer);
})();
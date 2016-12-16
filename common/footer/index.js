(function dhfooter() {
  var footer = {
    restrict: 'E',
    templateUrl: 'http://localhost:3000/web/common/footer/index.html',
  };
  headerModule = angular.module('dhfooter', ['ui.router'])
    .component('dhfooter', footer);
})();
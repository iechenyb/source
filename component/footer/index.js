(function myfooter() {
  var url = basePath+'component/footer/index.html';
  var footer = {
    restrict: 'E',
    templateUrl: url,
  };
  footerModule = angular.module('myfooter', ['ui.router'])
    .component('myfooter', footer);
})();
(function myfooter() {
  var footer = {
    restrict: 'E',
    templateUrl: '../../component/footer/index.html',
  };//http://localhost:3000/source1/component/
  footerModule = angular.module('myfooter', ['ui.router'])
    .component('myfooter', footer);
})();
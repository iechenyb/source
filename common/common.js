var jsonPD = function (data) {
  if (data.code == 0)return true;
  else alert(data.msg);
  return false;
}
var myInterceptor = function ($rootScope) {
  var timestampMarker = {
    request: function (config) {
      $rootScope.loading = true;
      return config;
    },
    response: function (response) {
      $rootScope.loading = false;
      return response;
    }
  };
  return timestampMarker;
}
angular.module('myInterceptor',[])
  .factory('myInterceptor', ["$rootScope", myInterceptor]);
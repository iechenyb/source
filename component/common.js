var jsonPD = function (data) {
  if (data.code == 0)return true;
  else alert(data.msg);
  return false;
}

var myInterceptor = function ($rootScope) {
  var timestampMarker = {
    request: function (config) {
      $rootScope.loading = false;
      console.log("request");
      $rootScope.msg="请求已发送！";
      return config;
    },
    response: function (response) {
      console.log("response");
      if(response.status==200){
        $rootScope.msg="请求完成！";
        $rootScope.loading = false;
      }else{
        $rootScope.msg="请求响应失败！";
        $rootScope.loading = false;
      }

      return response;
    }
  };
  return timestampMarker;
}
angular.module('myInterceptor',[])
  .factory('myInterceptor', ["$rootScope", myInterceptor]);
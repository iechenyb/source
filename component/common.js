var jsonPD = function (data) {
  if (data.code == 0)return true;
  else alert(data.msg);
  return false;
}
function sleep(numberMillis) {
  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) {
    now = new Date();
    if (now.getTime() > exitTime)
      return;
  }
}
var myInterceptor = function ($rootScope) {
  var tipWindow = '<div id="mask-loading" class="mask-loading" ng-if="loading" style="background-color: rgba(0, 0, 0, 0.17);">'
      +'<div class="loading-icon"></div>'
      +'</div>';
  $("body").append(tipWindow);
  var timestampMarker = {
    request: function (config) {
      $rootScope.loading = true;
      //sleep(0);
      /*config.st=setTimeout(function () {
      },500);*/
      return config;
    },
    response: function (response) {
      //clearTimeout(response.config.st);
      console.log("response");
      if(response.status==200){
        $rootScope.loading = false;
      }else{
        $rootScope.loading = false;
      }
      return response;
    },
    responseError:function(err){
      console.log("[Incetper]请求结束，处理异常！错误代码："+err.status+","+err.statusText);
      $rootScope.loading = false;
    }
  };
  return timestampMarker;
}
angular.module('myInterceptor',[])
  .factory('myInterceptor', ["$rootScope", myInterceptor]);
var app = angular.module("myApp", []);
app.directive("directive1", function() {
    return {
        restrict : "E",
        template : "<h1>自定义指令!</h1>",
        transclude:true
    };
});
app.directive("directive", function() {
    return {
        restrict : "E",
        template : "<h1>自定义指令!<span ng-transclude></span></h1>",
        transclude:true
    };
});
app.directive("header", function() {
    return {
        restrict : "E",
        template : "header content!",
        transclude:true
    };
});
app.directive('expander', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        scope : {
            title : '=expanderTitle'
        },
        template : '<div>'
        + '<div class="title" ng-click="toggle()">{{title}}</div>'
        + '<div class="body" ng-show="showMe" ng-transclude></div>'
        + '</div>',
        link : function(scope, element, attrs) {
            scope.showMe = false;
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
            }
        }
    }
});
app.controller('mycontroller',function($scope) {
    $scope.title = '点击展开';
    $scope.text = '这里是内部的内容。';
});
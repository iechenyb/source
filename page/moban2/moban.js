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
app.directive('accordion', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        template : '<div ng-transclude></div>',
        controller : function() {
            var expanders = [];
            this.gotOpened = function(selectedExpander) {
                angular.forEach(expanders, function(expander) {
                    if (selectedExpander != expander) {
                        expander.showMe = false;
                    }
                });
            }
            this.addExpander = function(expander) {
                expanders.push(expander);
            }
        }
    }
});
app.directive('expander1', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        require : '^?accordion',
        scope : {
            title : '=expanderTitle'
        },
        template : '<div>'
        + '<div class="title" ng-click="toggle()">{{title}}</div>'
        + '<div class="body" ng-show="showMe" ng-transclude></div>'
        + '</div>',
        link : function(scope, element, attrs, accordionController) {
            scope.showMe = false;
            accordionController.addExpander(scope);
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
                accordionController.gotOpened(scope);
            }
        }
    }
});

app.directive('ybheader', function() {
    return {
        restrict: 'E',
        templateUrl: 'iner.html',
        bindings:{links:'='},
        controllerAs:"ybheader",
        controller:function($scope,$rootScope,$state){
            console.log("ybheader !");
            $scope.name="chneyuanbao";
            $rootScope.name="xxhsl";
        }
    };
});
app.controller('mycontroller',function($scope) {
    $scope.title = '点击展开';
    $scope.text = '这里是内部的内容。';
    $scope.expanders = [{
        title : 'Click me to expand',
        text : 'Hi there folks, I am the content that was hidden but is now shown.'
    }, {
        title : 'Click this',
        text : 'I am even better text than you have seen previously'
    }, {
        title : 'Test',
        text : 'haha'
    }];
});
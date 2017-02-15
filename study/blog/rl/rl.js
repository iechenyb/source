/**
 * Created by DHUser on 2017/2/14.
 */
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.msg="hahha";
    $scope.yy="2017";
    $scope.mm="12";
    $scope.dd="2";
    $scope.kong = new Array(new Date($scope.yy, $scope.mm - 1, 1).getDay());
    for (var i = 0; i < $scope.kong.length; i++) {
        $scope.kong[i] = i;
    }
    console.log($scope.kong);
    //构建当前月天array
    var temprlarray = new Array(new Date($scope.yy, $scope.mm, 0).getDate());
    console.log(temprlarray);
    $scope.tipDates = [1,8,9,20,27];
    for (var i = 0; i < temprlarray.length; i++) {
        temprlarray[i] = {
            value: i + 1,
            data: ($scope.tipDates.indexOf(i + 1) != -1) ? true : false
        }
    }
    $scope.rlarray = temprlarray;
    $scope.chosedate = function (x) {
        if (x.data) {
            $scope.rlarray.forEach(function (item) {
                if (x.value == item.value) {
                    item.class = 'chose';
                }
                else {
                    item.class = null;
                }
            })
            $scope.dd=x.value;
        }
        return false;
    }
    //月份加
    $scope.addrl = function () {
        var temp = new Date($scope.yy, $scope.mm, 1);
        $scope.mm=temp.getMonth()+1;
        $scope.yy=temp.getFullYear();
        reset();
    };
    //月份减
    $scope.subrl = function () {
        var temp = new Date($scope.yy, $scope.mm - 1, 1);
        $scope.mm=temp.getMonth();
        if ($scope.mm == 0) {
            $scope.yy = parseInt(temp.getFullYear()) - 1;
            $scope.mm = 12;
        }else{
            $scope.yy=temp.getFullYear();
        }
        reset();
    };

    function reset(){
        $scope.kong = new Array(new Date($scope.yy, $scope.mm - 1, 1).getDay());
        for (var i = 0; i < $scope.kong.length; i++) {
            $scope.kong[i] = i;
        }
        console.log($scope.kong);
        //构建当前月天array
        var temprlarray = new Array(new Date($scope.yy, $scope.mm, 0).getDate());
        console.log(temprlarray);
        var tipDates = [1,8,9,20,27];
        var num = Math.ceil(Math.random()*31);
        tipDates=[];
        for(var j=0;j<num;j++){
            tipDates.push(Math.ceil(Math.random()*31));
        }
        console.log(tipDates);
        for (var i = 0; i < temprlarray.length; i++) {
            temprlarray[i] = {
                value: i + 1,
                data: (tipDates.indexOf(i + 1) != -1) ? true : false
            }
        }
        $scope.rlarray = temprlarray;
    }
});
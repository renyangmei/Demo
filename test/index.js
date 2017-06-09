var app=angular.module("myApp",[]);
    app.component("pageHeader",{
        // template:"<h2>我是标题，尊敬的{{username}}用户，欢迎访问本系统</h2>",
        templateUrl:"pageheader.html",
        controller:function ($scope) {
            $scope.username="小安";
        }
    });

app.controller("ctrl",["$scope",function ($scope) {
    $scope.username="tom";
}])

    app.component("pageSlide",{
        templateUrl:"pageslide.html"
    });

    app.component("pageFooter",{
        templateUrl:"pfooter.html"
    })


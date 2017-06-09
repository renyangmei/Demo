var app=angular.module("myApp",[]);
    app.component("pageHeader",{
        // template:"<h2>我是标题，尊敬的{{username}}用户，欢迎访问本系统</h2>",
        templateUrl:"pageheader.html",
        controller:function ($scope) {
            $scope.username="小安";
        }
    });

    app.component("pageSlide",{
        templateUrl:"pageslide.html"
    });

    app.component("pageContent",{
        templateUrl:"pagecontent.html"
    });

    app.component("pageFooter",{
        templateUrl:"pfooter.html"
    });
    app.controller("ctrl",["$scope",function ($scope) {
        $scope.username="tom";
        $scope.name="anna"
    }])



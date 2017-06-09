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
    app.controller("ctrl",["$scope","$http",function ($scope,$http) {
        $scope.students=[];
        $http.get('data.txt')
            .then(function (data, status, headers, config) {
                $scope.students = data.students;
                    console.log(data);
                    console.log(data.students);
                    console.log($scope.students);
                })
        $scope.username="tom";
        $scope.name="anna"
    }])



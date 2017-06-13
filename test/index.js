var app=angular.module("myApp",[]);
    app.component("pageHeader",{
        // template:"<h2>我是标题，尊敬的{{username}}用户，欢迎访问本系统</h2>",
        templateUrl:"component/pageheader.html",
        controller:function ($scope) {
            $scope.username="小安";
        }
    });
    app.component("pageSlide",{
        templateUrl:"component/pageslide.html"
    });
    app.component("pageContent",{
        templateUrl:"component/pagecontent.html",
        bindings:{
            students:"="
        },
        controller:['$scope',function($scope){
            var vm = this; //指向控制器,
            // console.log(vm);
            vm.$onInit = function(){ //控制器初始化的方法
                console.log($scope);
            }
            // $scope.$watch("$ctrl.students",function (newVal) {
            //     $scope;
            //     console.log(newVal);
            // })
        }]
    });

    app.component("pageFooter",{
        templateUrl:"component/pfooter.html"
    });
    /*取出数据*/
    app.controller("ctrl",["$scope","$http",function ($scope,$http) {
        // $scope.students=[];
        $http({
            url:'data/data.json'
        }).then(function (data, status, headers, config) {
                $scope.students = data.data.students;
                    console.log(data);
                    console.log(data.data.students);
                    console.log($scope.students);
                })
    }])



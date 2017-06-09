var app=angular.module("myApp",[]);
    app.component("pageHeader",{
        template:"<h2>我是标题，尊敬的{{username}}用户，欢迎访问本系统</h2>",
        controller:function ($scope) {
            $scope.username="小安";
        }
    });

    app.component("pageSlide",{
        template:"<h2>我是侧边栏</h2>"
    });

    app.component("pageFooter",{
        template:"<h2>我是底部</h2>"
    })


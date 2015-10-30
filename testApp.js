// ngRoute 路由单独模块
var routeApp = angular.module('routeApp',['ngRoute']);

routeApp.value('appName', 'MyCoolApp');

routeApp.config(['$routeProvider',function ($routeProvider) {
      $routeProvider.when('/test', {
        templateUrl: 'test.html',// 模板地址
        controller: 'RouteListCtl'//控制器name
      }).when('/test/:id', {
          templateUrl: 'test2.html',
          controller: 'RouteDetailCtl'
      }).otherwise({
        redirectTo: '/test'
      });
}]);

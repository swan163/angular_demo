var routeApp = angular.module('routeApp',['ngRoute']);
routeApp.config(['$routeProvider',function ($routeProvider) {
      $routeProvider.when('/test', {
        templateUrl: 'test.html',
        controller: 'RouteListCtl'
      }).when('/test/:id', {
          templateUrl: 'test2.html',
          controller: 'RouteDetailCtl'
      }).otherwise({
        redirectTo: '/test'
      });
}]);


var urlGet = document.getElementById("dataGet");
var url = urlGet.getAttribute("data-src");
routeApp.controller("RouteListCtl", function($scope, $http) {
	$http.get(url).success(function(data) {
		$scope.newList = data;
	})
})
routeApp.controller("RouteDetailCtl", function($scope, $routeParams, $http) {
	$http.get(url).success(function(data) {
		$scope.newList = data[$routeParams.id - 1];
	})
});
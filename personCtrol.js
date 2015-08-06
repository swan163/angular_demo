function personController($scope) {
    $scope.person = {
        firstName: "John",
        lastName: "swan",
        fullName : function() {
        	var x;
        	x = $scope.person;
        	return x.firstName + "-" + x.lastName;
        },
    };
}


function namerCtrol ($scope) {
	$scope.names = [
		{"ctry":"海角","name":"swan"},
		{"ctry":"企水镇","name":"hung"},
		{"ctry":"雷州","name":"guhb"},
	]
}

function costCtrol ($scope) {
	$scope.cost = {
		quantity : 1,
		price : 2,
	}
	return $scope.cost;
}
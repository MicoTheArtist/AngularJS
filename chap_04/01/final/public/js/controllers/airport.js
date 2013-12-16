function AirportCtrl ($scope, $routeParams) {
	$scope.currentAirport = $scope.airports[$routeParams.airportCode];
}

// Note for this practice session this function does not get used.
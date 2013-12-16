function AirportCtrl ($scope) {
	$scope.currentAirport = $scope.airports[$routeParams.airportCode];
}
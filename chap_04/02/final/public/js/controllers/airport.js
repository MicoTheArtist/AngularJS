function AirportCtrl ($scope, $routeParams, Airport) {  // "Airport" is added as a dependency
	$scope.currentAirport = Airport.get({
		airportCode: $routeParams.airportCode  // the "airportCode" here matches up the to "airportCode" route variable on the "services.js" page.
	});
}
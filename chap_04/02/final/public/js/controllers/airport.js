function AirportCtrl ($scope, $routeParams, Airport) {  // "Airport" is added as a dependency
	$scope.currentAirport = Airport.get({
		airportCode: $routeParams.airportCode  // the "airportCode" here matches up the to "airportCode" route variable on the "services.js" page.
	});
}

// keep in mind that here Airport is module working kind of like
// a function feeding in theh "airportCode:" left value into the
// "Airport" module function($resource) on the "services.js" page.
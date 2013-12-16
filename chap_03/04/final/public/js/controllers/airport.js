// AngularAir will read this function definition and automaticly
// supply the correct variables when the function is called.
function AirportCtrl ($scope, $routeParams) {	 // The "$routeParams" object will allow us to get that "airportCode" from the route.
	$scope.currentAirport = $scope.airports[$routeParams.airportCode];	// $routeParams.airportCode : gives us the airport code
																			// The "airportCode" property matches up to the "airportCode" property of the route on "app.js" non-controller page.
																			// What is ultimatly returned is the $scope.currentAirport array holding the information for the specific airport.
}
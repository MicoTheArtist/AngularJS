angular.module('airlineServices', ['ngResource'])
	.factory('Airport', function  ($resource) {
		return $resource('/airports/:airportCode');  // adding "/:airportCode" (would look something like "/airports/:airportCode") selects only the Json section of information that is in relation to the airport code, "ATL" for example
	});
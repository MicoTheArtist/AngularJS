angular.module('airlineServices', ['ngResource'])
	.factory('Airport', function  ($resource) {
		return $resource('/airports/:airportCode');
	})
	.factory('Flights', function  ($resource) { // "Flights" is the first parameter.
		return $resource('/flights');	// here we are setting "flights" as the route to the "flights.json" file.
	});
	
// NOTE: I figured out that these routes are getting the json information
//  	 from the external index.js file.
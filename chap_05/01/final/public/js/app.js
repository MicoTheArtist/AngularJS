angular.module('airline', ['airlineServices', 'airlineFilters'])  // "airlineFilters" has been added here as a dependency and "airlineFilters" module has been defined  below. 
	.config(airlineRouter);

function airlineRouter ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/destinations.html',
		 controller: 'DestinationsCtrl'})
		.when('/airports/:airportCode', {
		 templateUrl: 'partials/airport.html',
		 controller: 'AirportCtrl'
		})
		.when('/flights', {
		 templateUrl: 'partials/flights.html',
		 controller: 'FlightsCtrl'})
		.when('/reservations', {
		 templateUrl: 'partials/reservations.html',
		 controller: 'ReservationsCtrl'});
}

angular.module('airlineFilters', [])	// Defining the "airlineFilters" module.
										// This module does not have any dependencies,
										// however, this does define two filters.
	.filter('originTitle', function () { // "originTitle" filter
		return function (input) { // this function is wrapped within the outer function giving us the opportunity to do dependency injection if necessary.
								  // Next we are supplied with the input.		
			return input.origin + ' - ' + input.originFullName;  // now we are returning the output we want to display
		};
	})
	.filter('destinationTitle', function () { // "destinationTitle" filter
		return function (input) {
			return input.destination + ' - ' + input.destinationFullName;
		};
	});
	
	// NOTE: with these filters in place we can use them anywhere in our application.
	// 		  this way we do not have to clutter up the mark-up with redundant concatentation.
	
	// NOTE: it is also possible to create our own directives.
	// 		  The angular.js website has tutorials on how to create our own directives.
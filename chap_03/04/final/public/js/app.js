angular.module('airline', [])
	.config(airlineRouter);

function airlineRouter ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/destinations.html',
		 controller: 'DestinationsCtrl'})
		.when('/airports/:airportCode', {
		 templateUrl: 'partials/airport.html', // this will link back to the "airport.html" partial
		 controller: 'AirportCtrl'		// this pulls in the "AirportCtrl" function from page "airport.js"
		})
		.when('/flights', {
		 template: '<h3>Flights</h3> {{airports | json}}',
		 controller: 'FlightsCtrl'})
		.when('/reservations', {
		 template: '<h3>Your Reservations</h3> {{airports | json}}',
		 controller: 'ReservationsCtrl'});
}
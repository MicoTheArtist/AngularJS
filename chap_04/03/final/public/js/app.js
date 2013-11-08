angular.module('airline', ['airlineServices'])
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
		 templateUrl: 'partials/flights.html',  // this uses the new "flights.html" partial page that was created.
		 controller: 'FlightsCtrl'})
		.when('/reservations', {
		 template: '<h3>Your Reservations</h3> {{airports | json}}',
		 controller: 'ReservationsCtrl'});
}
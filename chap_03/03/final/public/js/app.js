angular.module('airline', [])
	.config(airlineRouter);

function airlineRouter ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/destinations.html',
		 controller: 'DestinationsCtrl'})
		.when('/flights', {
		 template: '<h3>Flights</h3> {{airports | json}}',	// {{airports | json}} this will display the value of airports in json format
		 controller: 'FlightsCtrl'})
		.when('/reservations', {
		 template: '<h3>Your Reservations</h3> {{airports | json}}', // {{airports | json}} this will display the value of airports in json format
		 controller: 'ReservationsCtrl'});
}

// here instead of specifying the functions here we are just specifying the names.
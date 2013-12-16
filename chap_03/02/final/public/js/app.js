angular.module('airline', [])
	.config(airlineRouter);

function airlineRouter ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/destinations.html',
		 controller: function  ($scope) {	// it is important to set in $scope for each of these controllers
		 	$scope.setActive('destinations');
		 }})
		.when('/flights', {template: '<h3>Flights</h3>',
		 controller: function  ($scope) {
		 	$scope.setActive('flights');
		 }})
		.when('/reservations', {template: '<h3>Your Reservations</h3>',
		 controller: function  ($scope) {
		 	$scope.setActive('reservations');
		 }});
}

/*
	While their are multiple ways of supplying navigation, the best way is to use links and controllers together.
    links: the links are used to show the possible vieews
    controllers: and the controllers are used to change the navigation state.
*/
function FlightsCtrl ($scope) {
	$scope.setActive('flights');
	$scope.airports = {}; // set $scope.airports to an empty object
						   // This is reflected in the browser. NOTE: this is different than the reservations.js page.
						   // In this way the flight controller can have it's own local copy of the airports object
						   
						   // Nested variable scopes is a very powerful feature of Angular. They make it possible to have
						   // self-contained elements that can still read data from outside, while being protected from
						   // changes elsewhere.
}
function FlightsCtrl ($scope, Flights) {  // here we are adding the "Flights" resource that we just defined on the "services.js" page
	$scope.setActive('flights');
	$scope.flights = Flights.query();
}
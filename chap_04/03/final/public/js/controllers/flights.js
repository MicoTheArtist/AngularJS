function FlightsCtrl ($scope, Flights) {  // here we are adding the "Flights" resource that we just defined on the "services.js" page.
											// The "Flights" resource contains the json pulled in from the JSON file "flights.json"
	$scope.setActive('flights');
	$scope.flights = Flights.query();
}
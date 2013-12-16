function ReservationsCtrl ($scope, Airport) {
	$scope.setActive('reservations');
	$scope.airports = Airport.query();
}
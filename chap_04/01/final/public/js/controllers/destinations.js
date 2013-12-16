function DestinationsCtrl ($scope, Airport) { // Angular will see "Airport" created on "service.js" page and automaticly pull it into our controller
 	$scope.setActive('destinations');

  $scope.sidebarURL = 'partials/airport.html'; // not used this session
  $scope.currentAirport = null;	// not used this session

  $scope.setAirport = function (code) {	// not used this session
    $scope.currentAirport = $scope.airports[code];	
  };

  $scope.airports = Airport.query();  // this method will go to the server, get all of the data and then return it.
}
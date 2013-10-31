function DestinationsCtrl ($scope, Airport) { // Angular will see "Airport" created on "service.js" page and automaticly pull it into our controller
 	$scope.setActive('destinations');

  $scope.sidebarURL = 'partials/airport.html';
  $scope.currentAirport = null;

  $scope.setAirport = function (code) {
    $scope.currentAirport = $scope.airports[code];
  };

  $scope.airports = Airport.query();  // this method will go to the server, get all of the data and then return it.
}
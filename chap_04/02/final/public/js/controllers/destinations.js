function DestinationsCtrl ($scope, Airport) {
 	$scope.setActive('destinations');

  $scope.sidebarURL = 'partials/airport.html';
  $scope.currentAirport = null;

  $scope.setAirport = function (code) {
    $scope.currentAirport = Airport.get({airportCode: code});
  };

  $scope.airports = Airport.query();
}

// keep in mind that here Airport is module working kind of like
// a function feeding in theh "airportCode:" left value into the
// "Airport" module function($resource) on the "services.js" page.
function DestinationsCtrl ($scope) {
 	$scope.setActive('destinations');

   // the code below was copied and pasted from the bottom of the app.js page. The one in the contoller folder.
  $scope.sidebarURL = 'partials/airport.html';
  $scope.currentAirport = null;

  $scope.setAirport = function (code) {
    $scope.currentAirport = $scope.airports[code];
  };
}
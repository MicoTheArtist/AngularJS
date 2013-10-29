function AppCtrl ($scope) {
  $scope.setActive = function (type) {
	// all of these first set the class="active" item to class="" for all of the "<li>" node items.
    $scope.destinationsActive = '';
    $scope.flightsActive = '';
    $scope.reservationsActive = '';

    $scope[type + 'Active'] = 'active';	// here we are setting one of the "<li>" node items to active using the type variable that is passed in and than concanatating "Active" to the end of it to set active.
  }

  $scope.airports = {
    "PDX": {
      "code": "PDX",
      "name": "Portland International Airport",
      "city": "Portland",
      "destinations": [
        "LAX",
        "SFO"
      ]
    },
    "STL": {
      "code": "STL",
      "name": "Lambert-St. Louis International Airport",
      "city": "St. Louis",
      "destinations": [
        "LAX",
        "MKE"
      ]
    },
    "MCI": {
      "code": "MCI",
      "name": "Kansas City International Airport",
      "city": "Kansas City",
      "destinations": [
        "LAX",
        "DFW"
      ]
    }
  };
  $scope.sidebarURL = 'partials/airport.html';
  $scope.currentAirport = null;

  $scope.setAirport = function (code) {
    $scope.currentAirport = $scope.airports[code];
  };
}
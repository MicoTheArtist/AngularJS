// what is different about this function, compared to a regular javascript function is that
// angular is going to have a look at it first.

function AppCtrl ($scope) { // when angular sees the $scope function it is going to automaticly pull the scope object, and supply it into this function as it is called.
							 // The difference is that angular is going to be calling this function.  We are not going to be calling it directly.
							 // Once we have the scope, we can than assign variables to the scope.
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
}
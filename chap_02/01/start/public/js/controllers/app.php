function AppCtrl ($scope) {
	$scope.airports = {
		"PDX" : {
			"code" : "PDX",
			"name" : "Portland International Airport",
			"city" : "Portland",
			"destinations" : [
				"LAX",
				"SFO"
			]
		},
		"STL" : {
			"code" : "STL",
			"name" : "Lambert-St. Louis International Airport",
			"city" : "St. Louis",
			"destination" : [
				"LAX",
				"MKE"
			]
		},
		"MCI" : {
			"code" : "MCI",
			"name" : "Kansas City International Airport",
			"city" : "Kansas City",
			"destination" : [
				"LAX",
				"DFW"
			]
		}
	};
}
function AppCtrl($scope) {
	$scope.airports = {
		"PDX" : {
			"code" : "PDX",
			"name" : "Portland International Airport",
			"city" : "Portland",
			"image" : "http://phaseoneimageprofessor.files.wordpress.com/2013/07/iqpw29_main_image_.jpg",
			"destinations" : [
				"LAX",
				"SFO"
			]
		},
		"STL" : {
			"code" : "STL",
			"name" : "Lambert-St. Louis International Airport",
			"city" : "St. Louis",
			"image" : "http://www.menucool.com/slider/prod/image-slider-4.jpg",
			"destinations" : [
				"LAX",
				"MKE"
			]
		},
		"MCI" : {
			"code" : "MCI",
			"name" : "Kansas City International Airport",
			"city" : "Kansas City",
			"image" : "http://blog.discourse.org/wp-uploads/2013/07/discourse-image-handling-3.png",
			"destinations" : [
				"LAX",
				"DFW"
			]
		},
	};
	
	$scope.currentAirport = null;
	
	$scope.setAirport = function(code) {
		$scope.currentAirport = $scope.airports[code];
	};
}
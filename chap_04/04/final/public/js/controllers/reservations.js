function ReservationsCtrl ($scope, Reservations) {
	$scope.setActive('reservations');

	$scope.reservations = Reservations.query();

	$scope.reserveFlight = function  () {	// "reserveFlight" is being called from "reservations.html" page.
		// first we want to record to save and then clear the forms so that another save can be made.
		Reservations.save($scope.reserve, function (data) { // here we are getting the values from the "reservations.html" page in the "reserve" object. This callback function is executed when we get the response back from the server. 
															   // When the callback function is executed, the data that's coming back from the server will be passed in. 
			// we are reseting the form here
			// Since the reserve object is bound to two of the inputs, setting the "origin" and "destination" properties to an empty string, will reset this form. 
			$scope.reserve.origin = '';
			$scope.reserve.destination = '';

			console.log(data);
			// here we push the data into our reservations array
			$scope.reservations.push(data);
		});
	}
}

// Use "resources" to save data back to the server.
// Unlike a traditional html form, "resource" callbacks make it possible to update the screen without leaving the page.

console.log(reservations);
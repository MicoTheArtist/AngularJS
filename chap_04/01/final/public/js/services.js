// this is an angular module
angular.module('airlineServices', ['ngResource']) // "airlineServices" is the module name
													 // "['ngResource']" is the module dependency.  This is the extra that we downloaded at the beginning of the course. Also known as "Angular-Resours.min.js" in the lib folder.

	.factory('Airport', function  ($resource) {	// The "factory" method is going to allow us to define an object in Angular that can be used over and over again.
													// "Airport" is the name of our object
													// the second argument is the function that defines our "Airport" object resource, and returns it.
		return $resource('/airports');	  // $resource allows us to create a new service.
										  // the argument "/airports" that $resource takes is the route to the service.  This brings in the json directly from the server.
	});
	
// define the json resources as modules, makes them available throughout the application.
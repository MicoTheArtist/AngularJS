angular.module('airline', []) /* The first argument in this module is the name of the module.  The second argument is any dependencies that you need for the module. */
								/* In this case we do not need any dependencies so we pass an empty array. */
	.config(airlineRouter); /* "config" allows me to pass in a function that will define the views. */
							 /* I can either pass in the function right here on the arguement itself or I can pass in the name of a function. In this case I am just passing in the name of the function and defining it at the bottom */

// This way you can specify the objects you want (In this case $routeProvider) and then Angular will fetch them, 
// and pass them in as it calls airlineRouter.
function airlineRouter ($routeProvider) {
	$routeProvider // Now we will use $routeProvider to provide the routes
		.when('/', {templateUrl: 'partials/destinations.html'})	// The first argument is the route. The second arguement is an object that allows us to pass in the path to a partial or markup itself. 
		.when('/flights', {template: '<h3>Flights</h3>'})
		.when('/reservations', {template: '<h3>Your Reservations</h3>'});
}
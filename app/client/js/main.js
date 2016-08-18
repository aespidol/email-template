var stylistApp = angular.module('stylistApp', ['ngRoute']);

stylistApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateURL: './client/partials/welcome.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})
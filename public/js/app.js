var app = angular.module('mean-todo', [
	'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl'
		})
		.state('todos', {
			url: '/todos',
			templateUrl: 'views/todos.html',
			controller: 'TodosCtrl'
		})


	$urlRouterProvider.otherwise('/');
})
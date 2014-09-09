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
		.state('posts', {
			url: '/posts',
			templateUrl: 'views/posts.html',
			controller: 'PostsCtrl'
		})
		.state('post', {
			url: '/posts/{id}',
			templateUrl: 'views/post.html',
			controller: 'PostsCtrl'
		})


	$urlRouterProvider.otherwise('home');
})
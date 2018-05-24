var commentsApp = angular.module('commentsApp', ['ngRoute']);

commentsApp.config(function ($routeProvider) {

	$routeProvider.when('/', {
		controller: 'CommentsController',
		templateUrl: 'views/comments.html'
	})
		.otherwise({
			redirectTo: '/'
		});
});
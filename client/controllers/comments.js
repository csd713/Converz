var commentsApp = angular.module('commentsApp');

commentsApp.controller('CommentsController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {

	$scope.getComments = function () {
		$http.get('/api/comment').success(function (response) {
			$scope.comments = response;
		});
	}

	$scope.getComment = function () {
		var id = $routeParams.id;
		$http.get('/api/comment/' + id).success(function (response) {
			$scope.comment = response;
		});
	}

	$scope.addComment = function () {
		$http.post('/api/comment/', $scope.comment).success(function () {
			window.location.href = '/';
		});
	}

	$scope.updateComment = function () {
		var id = $routeParams.id;
		$http.put('/api/comment/' + id, $scope.book).success(function () {
			window.location.href = '#/comment';
		});
	}

	$scope.deleteComment = function (id) {
		$http.delete('/api/comment' + id).then(function () {
			window.location.href = '#/comment';
		});
	}

}]);
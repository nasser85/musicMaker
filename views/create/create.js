app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create',
		templateUrl: '/views/create/create.html',
		controller: 'CreateCtrl'
	})
})

app.controller('CreateCtrl', function($scope) {
	$scope.buttons = [{
		name: 'Create',
		picture: 'create.jpg'
	}, {
		name: 'Listen',
		picture: 'browse.jpg'

	}, {
		name: 'Learn',
		picture: 'learn.jpg'
	}]
})
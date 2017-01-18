angular.module('ninetyNine', ['ui.grid', 'ui.router', 'templates'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'home/_home.html',
		controller: 'MainCtrl',
		resolve: {
			beerPromise: ['beers', function(beers) {
				return beers.getAll();
			}],
			pastPromise: ['beers', function(beers) {
				return beers.getPast();
			}]
		}
		
	})
	.state('beers', {
		url: '/beers/{id}',
		templateUrl: 'beers/_beers.html',
		controller: 'BeersCtrl',
		resolve: {
			beer: ['$stateParams', 'beers', function($stateParams, beers) {
    			return beers.get($stateParams.id);
  		}],
  			categoryPromise: ['beers', function(beers) {
				return beers.getCategories();
		}],
			colorsPromise: ['beers', function(beers) {
				return beers.getColors();
		}]
		}

	})
	.state('new', {
		url: '/new',
		templateUrl: 'home/templates/_form.html',
		controller: 'NewCtrl',
		resolve: {
    		categoryPromise: ['beers', function(beers) {
				return beers.getCategories();
			}],
			colorsPromise: ['beers', function(beers) {
				return beers.getColors();
		}]

		}
	})
	.state('edit', {
		url: '/beers/{id}/edit',
		templateUrl: 'home/templates/_form.html',
		controller: 'EditCtrl',
		resolve: {
			beer: ['$stateParams', 'beers', function($stateParams, beers) {
    			return beers.get($stateParams.id);
    		}],
    		categoryPromise: ['beers', function(beers) {
				return beers.getCategories();
			}],
			colorsPromise: ['beers', function(beers) {
				return beers.getColors();
		}]
  		}
	})
	.state('admin', {
		url: '/admin',
		templateUrl: 'admin/_admin.html',
		controller: 'AdminCtrl',
		resolve: {
			archivedPromise: ['beers', function(beers){
				return beers.getArchived();
			}]
		}
	});
	$urlRouterProvider.otherwise('home');
}]);

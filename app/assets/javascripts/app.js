angular.module('ninetyNine', ['ui.grid', 'ui.router', 'templates'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'home/_home.html',
		controller: 'MainCtrl',
		resolve: {
		// gets in and out of stock beers from database
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

		//gets instance of beer from database, colors, and categories
			
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

		//gets categories and colors
			
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

		//gets instance of beer, categories, colors (same as new)

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

		// for now just handles archived. could handle more in future

			archivedPromise: ['beers', function(beers){
				return beers.getArchived();
			}]
		}
	});
	$urlRouterProvider.otherwise('home');
}]);

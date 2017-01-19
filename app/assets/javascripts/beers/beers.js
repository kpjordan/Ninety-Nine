angular.module('ninetyNine')
.factory('beers', ['$http', '$state', function($http, $state){
	var o = {
		allBeers: [],
		pastBeers: [],
		archivedBeers: [],
		allCategories: [],
		colorOptions: [],
		messages: [],
		errors: []
	};
	
	// getting Beers data from database, as well as categories and colors

	o.getAll = function() {
		return $http.get('/beers.json').then(function successAllBeers(response) {
			angular.copy(response.data, o.allBeers);
		},
		function errorAllBeers(response){
			console.log("There was a problem!");
		});
	};
	
	o.getPast = function() {
		return $http.get('/past.json').then(function successAllBeers(response) {
			angular.copy(response.data, o.pastBeers);
		},
		function errorPastBeers(response){
			console.log("There was a problem!");
		});
	};

	o.getArchived = function() {
		return $http.get('/archived.json').then(function successGetArchive(response) {
			angular.copy(response.data, o.archivedBeers);
		},
		function errorGetArchive(response){
			console.log("There was a problem!");
		});
	};

	o.getCategories = function() {
		return $http.get('/categories.json').then(function successCategories(response) {
			angular.copy(response.data, o.allCategories);
		},
		function errorCategories(response) {
			console.log("Could not get categories");
		});
	};

	o.getColors = function() {
		return $http.get('/colors.json').then(function successColors(response){
			angular.copy(response.data, o.colorOptions);
		}, function errorColors(response) {
			console.log("Could not get colors");
		});
	};

	o.get = function(id) {
		return $http.get('/beers/' + id + '.json').then(function successGet(response) {
			return response.data
		},
		function errorGet(response) {
			console.log("Could not get " + id);
		});
	};

	// create & edit

	o.create = function(beer) {
		return $http.post('/beers.json', beer).then(function successCreate(response){
			o.allBeers.push(response.data);
			o.messages.push(beer.name + " was successfully created");
			$state.go('home');
		},
		function errorCreate(response){
			console.log("Could not create");
			o.errors.push("Failed to create new beer");
			$state.go('home');
		});
		
	};
	o.update = function(beer) {
		return $http.put('/beers/' + beer.id + '.json', beer).then(function successUpdate(response){
			o.messages.push(beer.name + " was successfully updated");
			$state.go('home');
		},
		function errorUpdate(response){
			o.errors.push(beer.name + " could not be updated");
			console.log("Could not update " + beer.id);
			$state.go('home');
		});
		
	};

	// beers are archived rather than deleted

	function beerFinder(beerArray, thisBeer){
		for (var i = 0; i < beerArray.length; i++){
			if (beerArray[i].id === thisBeer.id) {
				return i
			}
		};

	};

	o.archive = function(beer) {
		return $http.put('/beers/' + beer.id + '/archive.json', beer).then(function successArchive(response){
			
			if (beer.quantity_small === 0 && beer.quantity_large === 0){
				var beerIndex = beerFinder(o.pastBeers, beer);
				o.pastBeers.splice(beerIndex, 1);
			}
			else {
				var beerIndex = beerFinder(o.allBeers, beer);
				o.allBeers.splice(beerIndex, 1);
			}
			$state.go('home');
			o.messages.push(beer.name + " was successfully deleted");
			
		},
		function errorArchive(response){
			console.log("Could not archive " + beer.id);
			o.errors.push(beer.name + " could not be deleted");
			$state.go('home');
		});
		
	};



	o.unarchive = function(beer) {
		return $http.put('/beers/' + beer.id + '/unarchive.json', beer).then(function successUnarchive(response){
			var beerIndex = beerFinder(o.archivedBeers, beer);
			o.archivedBeers.splice(beerIndex, 1);
			o.messages.push(beer.name + " has been restored");
		}, function errorUnarchive(response){
			console.log("could not restore" + beer.id);
			o.errors.push(beer.name + " not restored");
		});
	}; 

	// decrement functions for when you remove a beer from stock

	o.smallDecrement = function(beer) {
		return $http.put('/beers/' + beer.id + '/drink_small.json').then(function successDecSmall(response){
			beer.quantity_small -= 1;
		},
		function errorDecSmall(response){
			console.log("Could not decrement small bottle value");
		});
	};
	o.largeDecrement = function(beer) {
		return $http.put('/beers/' + beer.id + '/drink_large.json').then(function successDecLarge(response){
			beer.quantity_large -= 1;
		},
		function errorDecLarge(response){
			console.log("COuld not decrement large bottle value");
		});
	};

	return o;
	
}]);
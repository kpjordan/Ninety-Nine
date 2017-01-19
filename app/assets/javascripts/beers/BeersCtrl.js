angular.module('ninetyNine')
.controller('BeersCtrl', ['$scope', 'beers', 'beer', '$state', function($scope, beers, beer, $state){
	$scope.beer = beer;
	$scope.colorOptions = beers.colorOptions;

	// Show details of Beer, hidden by default

	$scope.showDetails = false;
	$scope.buttonText = "Show Details"
	
	function colorFinder(colorId){
		for(var i = 0; i < $scope.colorOptions.length; i++){
			if ($scope.colorOptions[i].id === colorId){
				return $scope.colorOptions[i];
			};
		};
	}; 
	$scope.getNnColor = function(colorId){
		var nnColor = colorFinder(colorId);
		return nnColor.hex;
	};
	var categoryFinder = function(cat) {
		 return cat.id === beer.category_id;
	};
	$scope.nnCategory = beers.allCategories.find(categoryFinder);
	$scope.toggleDetails = function(){
		$scope.showDetails = !$scope.showDetails;
		if ($scope.showDetails){
			$scope.buttonText = "Hide Details";
		}
		else if(!$scope.showDetails){
			$scope.buttonText = "Show Details";
		} 
	};

	// function for decrementing

	$scope.drinkBeer = function(quantity){
		if (quantity > 0) {
			if(quantity === beer.quantity_small){
				beers.smallDecrement($scope.beer);
			}
			else if(quantity === beer.quantity_large){
				beers.largeDecrement($scope.beer);
			} 
		}
	};

	// function for archiving (does not permenently delete)

	$scope.archiveBeer = function(){
			beers.archive($scope.beer);
	}; 
	
	}])
	// these functions were written as directives to make the html 
	//more tidy and easy to lay out. should be made their own files eventually
  .directive('beerDetails', function(){
	return {
	  restrict: 'E',
	  templateUrl: 'beers/beer-details.html'
	};
  })
  .directive('beerDrink', function(){
  	return {
  	  restrict: 'E',
  	  templateUrl: 'beers/beer-drink.html'
  	};
  });
  
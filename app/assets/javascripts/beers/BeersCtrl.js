angular.module('ninetyNine')
.controller('BeersCtrl', ['$scope', 'beers', 'beer', '$state', function($scope, beers, beer, $state){
	$scope.beer = beer;
	$scope.showDetails = false;
	$scope.buttonText = "Show Details"
	$scope.colorOptions = beers.colorOptions;
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
	$scope.myCategory = beers.allCategories.find(categoryFinder);
	$scope.toggleDetails = function(){
		$scope.showDetails = !$scope.showDetails;
		if ($scope.showDetails){
			$scope.buttonText = "Hide Details";
		}
		else if(!$scope.showDetails){
			$scope.buttonText = "Show Details";
		} 
	};
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

	$scope.archiveBeer = function(){
			beers.archive($scope.beer);
	}; 
	

	}])
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
  
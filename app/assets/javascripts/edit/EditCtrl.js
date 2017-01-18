angular.module('ninetyNine')
.controller('EditCtrl', ['$scope', 'beer', 'beers', '$state', function($scope, beer, beers, $state) {
	$scope.beer = beer;
	$scope.categories = beers.allCategories;
	$scope.colorOptions = beers.colorOptions;
	$scope.pageTitle = "Edit " + beer.name;
	$scope.nnColor = beer.color_id;
	$scope.showDate = new Date(beer.bottle_date);
	$scope.today = new Date();
	$scope.$state = $state;
	var categoryFinder = function(cat) {
		 return cat.id === beer.category_id;
	};
	$scope.nnCategory = beers.allCategories.find(categoryFinder);
	var idForUpdate = function(thisId){
		return parseInt(thisId);
	};
	$scope.updateBeer = function(){

		beers.update({
			id: $scope.beer.id,
			name: $scope.beer.name,
			bottle_date: $scope.showDate,
			quantity_small: $scope.beer.quantity_small,
			quantity_large: $scope.beer.quantity_large,
			id_marks: $scope.beer.id_marks,
			description: $scope.beer.description,
			abv: $scope.beer.abv,
			color_id: idForUpdate($scope.nnColor),
			category_id: idForUpdate($scope.nnCategory.id)
		});

	};
}]);
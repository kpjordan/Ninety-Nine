angular.module('ninetyNine')
.controller('NewCtrl', ['$scope', 'beers', '$state', function($scope, beers, $state){
	$scope.categories = beers.allCategories;
	$scope.colorOptions = beers.colorOptions;

	$scope.$state = $state;

	// category defaults to first one for now 
	$scope.nnCategory = $scope.categories[0];

	// starts with no default color
	$scope.nnColor = 0;


	// starts with today's date
	$scope.showDate = new Date();
	
	
	$scope.pageTitle = "Add a New Beer";

	function idForCreate(thisId) {
		return parseInt(thisId);
	};

// create function on form submit

	$scope.createBeer = function(){
		beers.create({
			name: $scope.beer.name,
			bottle_date: $scope.showDate,
			quantity_small: $scope.beer.quantity_small,
			quantity_large: $scope.beer.quantity_large,
			category_id: idForCreate($scope.nnCategory.id),
			id_marks: $scope.beer.id_marks,
			description: $scope.beer.description,
			abv: $scope.beer.abv,
			color_id: idForCreate($scope.nnColor)

		});
		
	
	};
}]);		
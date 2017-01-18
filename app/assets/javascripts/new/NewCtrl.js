angular.module('ninetyNine')
.controller('NewCtrl', ['$scope', 'beers', '$state', function($scope, beers, $state){
	$scope.categories = beers.allCategories;
	$scope.colorOptions = beers.colorOptions;
	$scope.showDate = new Date();
	$scope.nnCategory = $scope.categories[0];
	$scope.nnColor = 0;
	$scope.pageTitle = "Add a New Beer";
	$scope.$state = $state;
	function idForCreate(thisId) {
		return parseInt(thisId);
	};

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
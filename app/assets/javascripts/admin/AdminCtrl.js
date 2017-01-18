angular.module('ninetyNine')
.controller('AdminCtrl', ['$scope', 'beers', '$state', function($scope, beers, $state){
	$scope.archivedBeers = beers.archivedBeers;
	$scope.messages = beers.messages;
	$scope.errors = beers.errors;
	$scope.restoreButtonText = "Show Restore Table";
	$scope.showDeleted = false;
	$scope.toggleRestoreTable = function(){
		$scope.showDeleted = !$scope.showDeleted;
		if ($scope.showDeleted){
			$scope.restoreButtonText = "Hide Restore Table";
		}
		else if(!$scope.showDeleted){
			$scope.restoreButtonText = "Show Restore Table";
		} 
	};

	$scope.undoDelete = function(myBeer){
		beers.unarchive(myBeer);
	}



}]);
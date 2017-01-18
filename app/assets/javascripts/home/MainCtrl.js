angular.module('ninetyNine')
.controller('MainCtrl', ['$scope', 'beers', 'uiGridConstants', function($scope, beers, uiGridConstants){


	$scope.gridOptions = {
		enableSorting: true,
		enableFiltering: true,
		rowHeight: 50,
		columnDefs: [
		{name: "Name", field: "name", headerCellClass: $scope.highlightFilteredHeader, cellClass: "grid-align", enableHiding: false},
		{name: "Identification", field: "id_marks", enableColumnMenu: false, cellClass: "grid-align"},
		{name: " ", cellClass: "grid-align",
		enableColumnMenu: false, enableFiltering: false, width: '100',
		cellTemplate: '<button class="btn btn-default" id="select-button" ui-sref="beers({id: row.entity.id})">Select</button>'}],
		data: beers.allBeers
			
	};
    $scope.gridOptions.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;
    $scope.buttonText = "Show Out-of-Stock Beers"
    $scope.pageTitle = "In-Stock Beers"
    $scope.toggleData = function(){
		$scope.showPastBeers = !$scope.showPastBeers;
		if ($scope.showPastBeers){
			$scope.buttonText = "Show In-Stock Beers";
			$scope.gridOptions.data = beers.pastBeers;
			$scope.pageTitle = "Out-of-Stock Beers";
		}
		else if(!$scope.showDetails){
			$scope.buttonText = "Show Out-of-Stock Beers";
			$scope.gridOptions.data = beers.allBeers;
			$scope.pageTitle = "In-Stock Beers";
		} 
	};

	$scope.messages = beers.messages;
	$scope.errors = beers.errors;
	
}]);

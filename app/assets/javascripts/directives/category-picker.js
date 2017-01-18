angular.module('ninetyNine')
.directive('categoryPicker', function(){
	return {
	  restrict: 'E',
	  templateUrl: 'home/templates/category-picker.html',
	  scope: {
	  	nnCategory: '=',
	  	categories: '='
	  }
	};
});
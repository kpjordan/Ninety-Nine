//directive for color picker. clicking on a colored circle selects
//it as the color of the beer and highlights the color selection
angular.module('ninetyNine')
.directive('colorPicker', function(){
	return {
		restrict: "E",
		templateUrl: 'home/templates/color-picker.html',
		scope: {
			colorOptions: "=colors",
			nnColor: "=color"
			},
		link: function(scope, element){
				scope.isColor = function(id_value) {
					return scope.nnColor == id_value;
				};

				scope.setColor = function(id_value) {
					scope.nnColor = id_value;
				};

			}
	};
});
angular.module('ninetyNine')
.directive('nnMessages', function(){
  	return {
  		restrict: 'E',
  		templateUrl: 'home/templates/nn-messages.html',
  		scope: {
  			messages: "=",
  			errors: "="
  		},
  		link: function(scope){
  			scope.$watch('messages', function(newValue, oldValue){
  				if (scope.messages.length > 0) {
				scope.message = scope.messages.pop();
				}
			}, true);
  			scope.$watch('errors', function(newValue, oldValue){
  				if (scope.errors.length > 0) {
				scope.error = scope.errors.pop();
				}
			}, true);
  		}  		
  	};
  });
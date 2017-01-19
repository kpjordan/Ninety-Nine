// directive used to give success & failure messages to the user
// if a Beers function creates a message or error, this directive
// sees that the length of the appropriate array has changed
// and passes the message into the appropriate alert, and clears out
// the array 

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
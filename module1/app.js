(function () {
	'use strict';

	var app = angular.module('LunchCheck', []);
		   
	var controller = app.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){

		console.log($scope.message);
		console.log($scope.dishes);
		console.log(this);

		$scope.changeMessage = function (dishesString){
			console.log(dishesString);
			if(dishesString==undefined || dishesString===""){
				$scope.message="Please enter data first";
			} else {
				var dishesArray = dishesString.split(',');
				console.log(dishesArray.length);
				if(dishesArray.length <=3){
					$scope.message="Enjoy!";
				} else {
					$scope.message="Too much!";
				}
			}
		}
	}

})();
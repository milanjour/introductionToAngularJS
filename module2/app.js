
(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.inject = ['ShoppingListCheckOffService'];
	function ToBuyController (ShoppingListCheckOffService) {
		var controller = this;

		controller.remove = function (itemIndex) {
			ShoppingListCheckOffService.remove(itemIndex);
		};

		controller.isEmpty = function () {
			return (controller.toBuyList.length == 0);
		};
	}

	AlreadyBoughtController.inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController (ShoppingListCheckOffService) {
		var controller = this;

		controller.boughtList = ShoppingListCheckOffService.bought;

		controller.isEmpty = function () {
			return (controller.boughtList.length == 0);
		};
		
		
	}

	function ShoppingListCheckOffService () {
		var service = this;

		service.bought = [];

		service.toBuyList = [
		{
			name: 'A',
			quantity: '5'},
		{
			name: 'B',
			quantity: '4'},
		{
			name: 'C',
			quantity: '3'},
		{
			name: 'D',
			quantity: '2'},
		{
			name: 'E',
			quantity: '1'}
		];

		service.remove = function (itemIndex) {
			var x = service.toBuyList.splice(itemIndex, 1)[0];
			service.bought.push(x);
			return service.bought;	
		};
	}

})();
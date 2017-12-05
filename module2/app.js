
(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.inject = ['ShoppingListCheckOffService'];
	function ToBuyController (ShoppingListCheckOffService) {
		var list1 = this;

		list1.toBuyList = ShoppingListCheckOffService.toBuy();

		list1.remove = function (itemIndex) {
			ShoppingListCheckOffService.remove(itemIndex);
		};

		list1.message = function () {
			return (list1.toBuyList.length == 0);
		};
	}

	AlreadyBoughtController.inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController (ShoppingListCheckOffService) {
		var list2 = this;

		list2.boughtList = ShoppingListCheckOffService.bought;

		list2.message = function () {
			return (list2.boughtList.length == 0);
		};
		
		
	}

	function ShoppingListCheckOffService () {
		var service = this;

		service.toBuyList = [];
		service.bought = [];

		service.initialList = [
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

		service.toBuy = function () {
			service.toBuyList = service.initialList;
			return service.toBuyList;
		};

		service.remove = function (itemIndex) {
			var x = service.toBuyList.splice(itemIndex, 1)[0];
			service.bought.push(x);
			return service.bought;	
		};
	}

})();
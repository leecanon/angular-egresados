var app = angular.module("myModule", [])
		.controller("myController", function($scope){
			var members = [
				{firstname: "John", lastname: "Smith", gender: "Masculino"},
				{firstname: "Claire", lastname: "Temple", gender: "Femenino"},
				{firstname: "Victor", lastname: "Carmona", gender: "Masculino"},
				{firstname: "Andres", lastname: "Lopez", gender: "Masculino"},
				{firstname: "Luis", lastname: "Santana", gender: "Masculino"},
				{firstname: "Carmen", lastname: "Palomares", gender: "Femenino"},
				{firstname: "Augusto", lastname: "Vegeta", gender: "Masculino"},
				{firstname: "Antonio", lastname: "Rivera", gender: "Masculino"},
			];
			
			$scope.members = members;
			$scope.reverseSort = false;
			
			$scope.sortData = function(column){
				$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
				$scope.sortColumn = column;
				
			}
			
			$scope.getSortClass = function(column){
				if($scope.sortColumn == column){
					return $scope.reverseSort ?  'down-arrow' : 'up-arrow';
				}
				return '';
			}
});
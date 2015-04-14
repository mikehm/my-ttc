angular.module('myTtc').controller('SchedulesCtrl',
function($scope, scheduleService){
	
	$scope.date_now = new Date();
	
	$scope.stop_times = [];
	
	$scope.ask = function(station){


		scheduleService.getSched(station).then(
		function(data){
		  $scope.message = '';
		  $scope.routes = data;		
			$scope.routes.forEach(function(item){
				angular.forEach(item.stop_times, function(item){
					$scope.stop_times.push(item);			
				});				
			});
		}, function(err){
			$scope.message = "Data is not available for this station";
		});

		$scope.stop_times = [];	
		$scope.station = '';
	};


});

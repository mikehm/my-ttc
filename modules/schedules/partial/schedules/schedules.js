angular.module('myTtc').controller('SchedulesCtrl',
function($scope, scheduleService){

	$scope.ask = function(station){
		var st = station.split(' ').join('_');
		scheduleService.getSched(st).then(
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

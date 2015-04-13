angular.module('myTtc').controller('SchedulesCtrl',
function($scope, scheduleService){

	$scope.date_now = new Date();

	$scope.stop_times = [];
	scheduleService.getSched().then(
		function(data){
		  $scope.routes = data;		
			$scope.routes.forEach(function(item){
				angular.forEach(item.stop_times, function(item){
					$scope.stop_times.push(item);
				})				
			});

	});
});

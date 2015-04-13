angular.module('myTtc').controller('SchedulesCtrl',function($scope, scheduleService){

	scheduleService.getSched().then(
			function(data){
				$scope.ttc  = data;
		});

});
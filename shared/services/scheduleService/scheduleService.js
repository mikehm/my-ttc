angular.module('myTtc').factory('scheduleService',function($http,$q) {

	var scheduleService = {};
	scheduleService.getSched = function getSched(station){

		var deferred = $q.defer();	
		$http.jsonp("http://myttc.ca/finch_station.json?callback=JSON_CALLBACK")
			.success(function(data, status, headers, config){
				
				deferred.resolve(data);
				
			})
			.error(function(err){
				deferred.reject("Data is not available");
			});
		return deferred.promise;
	};


	return scheduleService;
});



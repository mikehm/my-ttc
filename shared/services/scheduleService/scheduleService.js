angular.module('myTtc').factory('scheduleService',function($http,$q) {

	var scheduleService = {};

	scheduleService.getSched = function getSched(station){
		var deferred = $q.defer();	
		$http.jsonp("http://myttc.ca/"+station+"_station.json?callback=JSON_CALLBACK")
			.success(function(data, status, headers, config){			
				angular.forEach(data.stops, function(item){
					deferred.resolve(item.routes);
				});
			})
			.error(function(err){
				deferred.reject("Data is not available");
			});
		return deferred.promise;
	};
	return scheduleService;
});



angular.module('myTtc', ['ui.bootstrap',
    'ui.utils',
    'ui.router',
    'ngAnimate',
    'uiGmapgoogle-maps']);

angular.module('myTtc').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('schedules', {
        url: '/schedules',
        templateUrl: 'modules/schedules/partial/schedules/schedules.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('myTtc').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

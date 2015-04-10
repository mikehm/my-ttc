angular.module('myTtc', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('myTtc').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('schedule', {
        url: '/schecule',
        templateUrl: 'modules/partial/schedule/schedule.html'
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

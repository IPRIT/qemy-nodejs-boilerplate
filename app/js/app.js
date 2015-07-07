'use strict';

angular.module('Qemy', [
    'ng',
    'ngRoute',
    'ngSanitize',
    'Qemy.controllers',
    'Qemy.services'
])
    .config(['$locationProvider', '$routeProvider', 'StorageProvider', function($locationProvider, $routeProvider, StorageProvider) {
        if (Config.Modes.test) {
            StorageProvider.setPrefix('t_');
        }
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/', {
                templateUrl: templateUrl('index', 'main'),
                controller: 'IndexCtrl'
            })
            .otherwise({redirectTo: '/'});
    }]);
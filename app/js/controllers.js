'use strict';

/* Controllers */

angular.module('Qemy.controllers', [
    'Qemy.i18n'
])
    .controller('PageCtrl', ['$scope', '_', function($scope, _) {
        var defaultTitle = _('app_name');
        $scope.$on('change_title', function(e, args) {
            $scope.title = args.title !== undefined && args.title.length ? args.title : defaultTitle;
        });
    }])

    .controller('AppCtrl', ['$scope', function($scope) {
        console.log('Works!');
    }])

    .controller('IndexCtrl', ['$scope', '_', function($scope, _) {
        $scope.$emit('change_title', {
            title: _('app_name')
        });
    }])
;
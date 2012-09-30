/*global define */
(function () {
    'use strict';

    define(['AngularJS', 'underscore'], function (angular, _) {
        return angular.module('appheaven', []).config([
            '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                var TEMPLATE_URL = '/templates',
                    templateViews = ['home', 'contact', 'directions'];

                _.map(templateViews, function (view) {
                    $routeProvider.when('/' + view, {
                        templateUrl: TEMPLATE_URL + '/' + view + '.html'
                    });
                });
                $routeProvider.otherwise({redirectTo: '/home'});

                $locationProvider.html5Mode(true);
            }
        ]);
    });
}());

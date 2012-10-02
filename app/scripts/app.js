/*global define */
(function () {
    'use strict';

    define(['AngularJS', 'underscore'], function (angular, _) {
        return angular.module('appheaven', []).config([
            '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                var TEMPLATE_URL = '/templates',
                    templateViews = ['home', 'contact', 'directions', 'menu'];

                _.map(templateViews, function (view) {
                    $routeProvider.when('/' + view, {
                        templateUrl: TEMPLATE_URL + '/' + view + '.html'
                    });
                });
                $routeProvider.when('/menu/:index', {
                    templateUrl: TEMPLATE_URL + '/menu_sub.html'
                });
                $routeProvider.otherwise({redirectTo: '/home'});

                $locationProvider.html5Mode(true);
            }
        ]);
    });
}());

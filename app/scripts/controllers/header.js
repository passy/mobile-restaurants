/*globals define*/
(function () {
    'use strict';

    define(['app'], function (app) {
        app.controller('HeaderController', ['$scope', '$route', function ($scope, $route) {
            $scope.isHome = function () {
                if ($route.current && $route.current.$route) {
                    return $route.current.$route.templateUrl.indexOf("home.html") > 0;
                }
            };
        }]);
    });
}());

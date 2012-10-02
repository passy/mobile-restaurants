/*global define*/
(function () {
    'use strict';

    define(['app', 'text!resources/menu.json'], function (app, menuResource) {
        var menuData = JSON.parse(menuResource).menu;

        app.controller('MenuController', ['$scope', '$routeParams', function ($scope) {
            $scope.menu = menuData;
        }]);

        app.controller('MenuSubController', ['$scope', '$routeParams', '$location',
                       function ($scope, $routeParams, $location) {

            var index = $routeParams.index,
                menu = menuData[parseInt(index, 10)];

            if (!menu) {
                $location.path('/menu');
            }

            $scope.menu = menu;
        }]);
    });
}());

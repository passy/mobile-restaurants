/*global define*/
(function () {
    'use strict';

    define(['app', 'text!resources/menu.json'], function (app, menuResource) {
        app.controller('MenuController', ['$scope', function ($scope) {
            var menu = JSON.parse(menuResource).menu;
            $scope.menu = menu;
        }]);
    });
}());

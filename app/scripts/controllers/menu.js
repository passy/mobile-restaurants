/*global define*/
(function () {
    'use strict';

    define(['app', 'text!resources/menu.json'], function (app, menuResource) {
        var menuData = JSON.parse(menuResource).menu;
        app.controller('MenuController', ['$scope', '$route', function ($scope, $route) {
            $scope.menu = menuData;
        }]);
    });
}());

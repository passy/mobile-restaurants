(function () {
'use strict';

define(['AngularJS'], function (angular) {
  return angular.module('appheaven', []).config([
    '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      var TEMPLATE_URL = "/templates";

      $routeProvider
        .when('/home', {
            templateUrl: TEMPLATE_URL + "/home.html"
        })
        .otherwise({redirectTo: '/home'});
  }]);
});
}());

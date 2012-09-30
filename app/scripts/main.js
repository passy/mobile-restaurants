/*globals: require */
(function () {
  'use strict';

  require.config({
    shim: {
      AngularJS: {
        exports: 'angular'
      },
      underscore: {
        exports: '_'
      }
    },

 paths: {
    AngularJS: 'vendor/AngularJS/angular',
    underscore: 'vendor/underscore/underscore',
    }
  });

  require(['AngularJS', 'app', 'directives', 'controllers/header'], function (angular) {
    angular.bootstrap(document, ['appheaven']);
  });
}());

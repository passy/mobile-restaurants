/*globals: require */
(function () {
  'use strict';

  require.config({
    baseUrl: "/scripts/",
    shim: {
      AngularJS: {
        exports: 'angular'
      },
      underscore: {
        exports: '_'
      }
    },

    paths: {
        AngularJS: '/scripts/vendor/AngularJS/angular',
        underscore: '/scripts/vendor/underscore/underscore',
        text: '/scripts/vendor/requirejs/text',
    }
  });

  require(['AngularJS', 'app', 'directives', 'controllers/header',
           'controllers/menu'], function (angular) {
    angular.bootstrap(document, ['appheaven']);
  });
}());

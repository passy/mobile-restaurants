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
    AngularJS: '../../components/AngularJS/angular',
    requirejs: '../../components/requirejs',
    text: '../../components/text/text',
    underscore: '../../components/underscore/underscore',
   }
  });

  require(['AngularJS', 'app', 'directives', 'controllers/header',
           'controllers/menu'], function (angular) {
    angular.bootstrap(document, ['appheaven']);
  });
}());

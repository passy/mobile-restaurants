(function () {
  'use strict';

  require.config({
    shim: {
      AngularJS: {
        exports: 'angular'
      }
    },

    paths: {
      AngularJS: 'vendor/AngularJS/angular'
    }
  });

  require(['AngularJS', 'app', 'directives'], function (angular) {
    angular.bootstrap(document, ['appheaven']);
  });
}());

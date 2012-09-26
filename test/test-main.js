require.config({
  baseUrl: '../app/scripts/',

  shim: {
    'mocha': {
      exports: 'mocha'
    },

    'AngularJS': {
      exports: 'angular'
    }
  },

  paths: {
    AngularJS: 'vendor/AngularJS/angular',
    test: '../../test/',
    mocha: '../../test/lib/mocha/mocha',
    chai: '../../test/lib/chai'
  }
});

require(['mocha'], function (mocha) {
  mocha.setup('bdd');

  require(['test/spec/app.spec'], function () {
    mocha.run();
  });
});

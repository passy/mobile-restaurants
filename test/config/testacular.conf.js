basePath = '../../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'test/lib/requirejs/adapter_first.js', // first

  'app/scripts/vendor/AngularJS/angular.js',
  'app/scripts/vendor/AngularJS/angular-*.js',

  'app/scripts/app.js',

  'test/lib/angular/angular-mocks.js',
  'test/unit/**/*.js',

  // require.js itself
  'test/lib/requirejs/adapter_before.js',
  'app/scripts/vendor/require.js',
  'test/lib/requirejs/adapter_after.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};

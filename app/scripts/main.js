require.config({
  shim: {
  },

 paths: {
    AngularJS: 'vendor/AngularJS/angular'
  }
});

require(['app'], function(app) {
    console.log(app);
});

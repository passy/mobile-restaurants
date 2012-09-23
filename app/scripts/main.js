require.config({
  shim: {
  },

 paths: {
    AngularJS: '../../components/AngularJS/angular',

    jquery: 'vendor/jquery.min'
  }
});
 
require(['app'], function(app) {
  // use app here
  console.log(app);
});
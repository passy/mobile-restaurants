define(['chai', 'app'], function (chai) {
  describe('App Initialization', function() {
    describe('When the app object is required', function() {

      it('should return an angular module', function() {
          var app = require('app');
          chai.expect(app).to.exist;
      });
    });
  });
});

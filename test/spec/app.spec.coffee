define ['chai', 'app'], (chai) ->
  describe 'App Initialization', ->

    describe 'When the app object is required', ->

      it 'should return an angular module', ->
          app = require 'app'
          chai.expect(app).to.exist

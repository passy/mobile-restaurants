define(['app/scripts/app'], ->
    describe "When initializing the app", ->
        it "should be defined", ->
            app = require "app/scripts/app"
            expect(app).toBeDefined()
)

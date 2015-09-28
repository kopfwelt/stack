'use strict'

Backbone = require 'backbone'
Backbone.$ = require 'jquery'
Marionette = require 'backbone.marionette'

# HeaderView = require('./views/header'),
# AppRouter = require('./router'),
# AppController = require('./controller');

# Marionette.Behaviors.behaviorsLookup = ->
#   window.Behaviors

# window.Behaviors = {}
# window.Behaviors.Closeable = require './behaviors/Closeable'

ToggleableRegion = require './regions/ToggleableRegion'
# AppView = require './views/AppView'
# TodoModule = require('./modules/todo/TodoModule')
# NotificationModule = require('./modules/notification/NotificationModule')
ThreeDModule = require('./modules/threed/ThreeDModule')

class App extends Backbone.Marionette.Application
  initialize: =>
    console.log 'Initializing app...'

    @router = new Backbone.Marionette.AppRouter()

    # @addInitializer( (options) =>
    #   (new AppView()).render()
    # )

    @addInitializer( (options) =>
      @addRegions({
        threedRegion: {
          selector: "#webgl"
          regionClass: ToggleableRegion
          module: @submodules.ThreeD
        }
      })

      Backbone.history.start()
    )

    # @addInitializer( (options) =>
    #   Backbone.history.start()
    # )

    @module('ThreeD', ThreeDModule)

    # @ThreeD.start()

    @start()

module.exports = new App()

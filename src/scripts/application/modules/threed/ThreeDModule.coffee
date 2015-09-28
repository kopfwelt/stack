# BaseModule = require '../BaseModule'
Marionette = require 'backbone.marionette'

module.exports = class ThreeDModule extends Marionette.Module
  initialize: ->
    @MainView = require './views/MainView'

    console.log 'Initializing ThreeDModule'
    @startWithParent = false

    console.log @region
    # @region.show(@mainView)

  onStart: ->
    console.log 'Starting ThreeDModule'

  onStop: ->
    console.log 'Stopping ThreeDModule'

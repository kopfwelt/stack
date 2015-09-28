'use strict'

Marionette = require 'backbone.marionette'
RegistrationView = require './view'

module.exports = Marionette.Module.extend(
  startWithParent: true
  eventName: 'register'
  region: null
  # initialize: (Register, app) ->
  #   @region = app.body
    
  #   # Bind events
  #   headerChannel.comply 'click:' + @eventName, @showRegistrationForm, this
  #   return

  # onStart: ->
  #   headerChannel.command 'add:link',
  #     eventName: @eventName
  #     title: 'Register'
  #     href: '#register'

  #   return

  # showRegistrationForm: ->
  #   view = new RegistrationView()
  #   @region.show view
  #   return
)
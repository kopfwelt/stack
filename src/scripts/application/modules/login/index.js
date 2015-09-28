'use strict';
var Marionette = require('backbone.marionette'),
  LoginView = require('./view'),
  Radio = require('backbone.radio');

var headerChannel = Radio.channel('header');

module.exports = Marionette.Module.extend({
  startWithParent: true,
  eventName: 'login',

  region: null,

  initialize: function(Login, app){
    this.region = app.body;

    // Bind events
    headerChannel.comply('click:' + this.eventName, this.showLoginForm, this);
  },

  onStart: function(){
    headerChannel.command('add:link', {
      eventName: this.eventName,
      title: 'Login',
      href: '#login'
    });
  },

  showLoginForm: function(){
    var login = new LoginView(); 
    this.region.show(login);
  }
});


/*jshint unused: vars */
require.config({
  paths: {
    'angular':'../bower_components/angular/angular',
    'angular-route':'../bower_components/angular-route/angular-route',
    'angular-cookies':'../bower_components/angular-cookies/angular-cookies',
    'angular-sanitize':'../bower_components/angular-sanitize/angular-sanitize',
    'angular-resource':'../bower_components/angular-resource/angular-resource',
    'angular-mocks':'../bower_components/angular-mocks/angular-mocks',
    'jquery':'../bower_components/jquery/dist/jquery',
    'styles': '../styles',
    'jplayer': '../bower_components/jplayer/jquery.jplayer/jquery.jplayer',
    'jplayer-playlist': '../bower_components/jplayer/add-on/jplayer.playlist'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angular-route': ['angular'],
    'angular-cookies': ['angular'],
    'angular-sanitize': ['angular'],
    'angular-resource': ['angular'],
    'angular-mocks': {
      deps:['angular'],
      'exports':'angular.mock'
    },
    'jplayer': ['jquery'],
    'jplayer-playlist': ['jquery','jplayer']
  },
  priority: [
    'angular',
    'jquery'
  ],
  map: {
    '*': {
      'less': '../bower_components/require-less/less',
      'css': '../bower_components/require-css/css'
    }
  }
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angular-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource',
  'less!styles/main'
], function(angular, app, ngRoutes, ngCookies, ngSanitize, ngResource) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
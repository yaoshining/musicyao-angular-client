/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/player', 'directives/musicplayer']/*deps*/, function (angular, MainCtrl, PlayerCtrl, MusicplayerDirective)/*invoke*/ {
  'use strict';

  return angular.module('musicyaoApp', ['musicyaoApp.controllers.MainCtrl',
'musicyaoApp.controllers.PlayerCtrl',
'musicyaoApp.directives.Musicplayer',
/*angJSDeps*/
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/player', {
          templateUrl: 'views/player.html',
          controller: 'PlayerCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});

define(['angular','less!styles/player','directives/musicplayer','jquery'], function (angular) {
  'use strict';

  angular.module('musicyaoApp.controllers.PlayerCtrl', ['ngResource'])
    .controller('PlayerCtrl', function ($scope,$resource,$http,$log) {
	  // $.ajax({
	  // 	url: '/MusicYao/music/random/10',
	  // 	type: 'GET',
	  // 	dataType: 'json'
	  // })
	  // .done(function(data) {
	  // 	console.log(data);
	  // })
	  // .fail(function(a,b) {
	  // 	console.log(b);
	  // })
	  // .always(function() {
	  // 	console.log("complete");
	  // });
	  
    });
});

define(['angular','jquery','jplayer','jplayer-playlist'], function (angular) {
  'use strict';

  angular.module('musicyaoApp.directives.Musicplayer', [])
  	.directive('musicPlayer', function () {
      return {
      	restrict: 'A',
      	link: function postLink(scope, element, attrs) {
          var myPlaylist = new jPlayerPlaylist({
            jPlayer: "#jquery_jplayer_N",
            cssSelectorAncestor: "#jp_container_N"
          }, [
            {
              title:"Cro Magnon Man",
              artist:"The Stark Palace",
              mp3:"http://114.215.109.39:7001/MusicYao/music/8.mp3",
              poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
            }
          ], {
            playlistOptions: {
              enableRemoveControls: true
            },
            swfPath: "js",
            supplied: "mp3",
            smoothPlayBar: true,
            keyEnabled: true,
            audioFullScreen: true,
            play: function(){
              scope.$apply(function(){
                scope.playing = true;
              });
            },
            pause: function(){
              scope.$apply(function(){
                scope.playing = false;
              });
            }
          });
          myPlaylist.select(0);
          scope.playing = false;
          scope.play = function(index){
            if(index){
              myPlaylist.play(index);
            }else{
              myPlaylist.play();
            }
          }
          scope.pause = function(){
            myPlaylist.pause();
          }
      	}
      };
  	});
});

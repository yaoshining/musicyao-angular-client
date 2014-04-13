define(['angular','jquery','jplayer','jplayer-playlist'], function (angular) {
  'use strict';

  angular.module('musicyaoApp.directives.Musicplayer', ['ngResource'])
  	.directive('musicPlayer', function ($resource,$log) {
      return {
      	restrict: 'A',
      	link: function postLink(scope, element, attrs) {
          var Musics = $resource("/MusicYao/music/random/:count",{count: '@count'});
          var musics = Musics.query({count:10},function(){
            var playlist = [];
            for(var i=0;i<musics.length;i++){
              var music = {
                title: musics[i].title,
                artist: "artist",
                album: "album",
                mp3: "http://114.215.109.39:7001/MusicYao/music/"+musics[i].id+".mp3",
                poster: "http://114.215.109.39:7001/MusicYao/music/poster/"+musics[i].id+".jpg"
              }
              playlist.push(music);
            }
            var myPlaylist = new jPlayerPlaylist({
              jPlayer: "#jquery_jplayer_N",
              cssSelectorAncestor: "#jp_container_N"
            }, playlist, {
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
            scope.myPlaylist = myPlaylist;
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
            scope.next =function(){
              myPlaylist.next();
            }
            scope.previous = function(){
              myPlaylist.previous();
            }
          });
          scope.playing = false;       
      	}
      };
  	});
});

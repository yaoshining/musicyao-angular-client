/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: musicPlayer', function () {

    // load the directive's module
    beforeEach(module('musicyaoApp.directives.Musicplayer'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<music-player></music-player>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the musicPlayer directive');
    }));
  });
});

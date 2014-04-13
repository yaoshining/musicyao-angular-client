var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

    paths: {
    angular: '../bower_components/angular/angular',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    jquery: '../bower_components/jquery/dist/jquery',
    styles: '../styles',
    jplayer: '../bower_components/jplayer/jquery.jplayer/jquery.jplayer',
    'jplayer-playlist': '../bower_components/jplayer/add-on/jplayer.playlist',
    css: '../bower_components/require-css/css',
    'css-builder': '../bower_components/require-css/css-builder',
    normalize: '../bower_components/require-css/normalize',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    'angular-scenario': '../bower_components/angular-scenario/angular-scenario'
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
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

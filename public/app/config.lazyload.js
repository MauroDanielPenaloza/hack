// lazyload config

angular.module('app')
  .constant('MODULE_CONFIG', [
      {
          name: 'materialize',
          module: true,
          files: [
              'libs/jquery/materialize/materialize.min.js',
              'libs/jquery/materialize/materialize.min.css'
          ]
      },
      {
          name: 'moment',
          module: false,
          files: [
              'libs/jquery/moment/moment.js'
          ]
      }
    ]
  )
  .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function($ocLazyLoadProvider, MODULE_CONFIG) {
      $ocLazyLoadProvider.config({
          debug: false,
          events: false,
          modules: MODULE_CONFIG
      });
  }]);

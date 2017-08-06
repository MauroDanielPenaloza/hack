// lazyload config

angular.module('app')
  .constant('MODULE_CONFIG', [
         {
          name: 'lfNgMdFileInput',
          module: true,
          files: [
              'libs/assets/angular-material-file/lf-ng-md-file-input.min.js',
              'libs/assets/angular-material-file/lf-ng-md-file-input.css'
          ]
      },
      {
          name: 'materialize',
          module: true,
          files: [
              'libs/jquery/materialize/materialize.min.js',
              'libs/jquery/materialize/materialize.min.css'
          ]
      },
       {
          name: 'ui.grid',
          module: true,
          files: [
              '../libs/angular/angular-ui-grid/3.2.11/ui-grid.min.js',
              '../libs/angular/angular-ui-grid/3.2.11/ui-grid.min.css',
              '../libs/angular/angular-ui-grid/ui-grid.bootstrap.css'
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

'use strict';

/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
var app=angular.module('app');
  app.run(
    [           '$rootScope', '$state', '$stateParams',
      function ( $rootScope,   $state,   $stateParams ) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  app.config(['$stateProvider', '$urlRouterProvider', 'MODULE_CONFIG', function ( $stateProvider,   $urlRouterProvider,  MODULE_CONFIG ) {
      $urlRouterProvider
          .otherwise('/prediccion');
           $stateProvider
         .state('app', {
            abstract: true,
            url: '',
            views: {
              '': {
                templateUrl: 'app/views/layout.html'
              }
            }
           
          })
          .state('app.prediccion', {
              url: '/prediccion',
              templateUrl: 'app/views/prediccion.html',
              controller: 'DashController',
              resolve: load(['lfNgMdFileInput','ui.grid'])
            })
          .state('app.pronostico', {
              url: '/pronostico',
              templateUrl: 'app/views/pronostico.html',
              controller: 'DashController',
              resolve: load(['lfNgMdFileInput','ui.grid'])
            })
           .state('app.salida', {
              url: '/salida',
              templateUrl: 'app/views/salida.html',
              controller: 'SalidaController',
              resolve: load([])
            })
          /*  .state('app.control', {
              url: '/admin',
              templateUrl: 'app/views/admin.html',
              controller: 'AdminController',
              resolve: load(['app/controllers/AdminController.js'])
            })*/
          function load(srcs, callback) {
            return {
                deps: ['$ocLazyLoad', '$q',
                  function( $ocLazyLoad, $q ){
                    var deferred = $q.defer();
                    var promise  = false;
                    srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                    if(!promise){
                      promise = deferred.promise;
                    }
                    angular.forEach(srcs, function(src) {
                      promise = promise.then( function(){
                        angular.forEach(MODULE_CONFIG, function(module) {
                          if( module.name == src){
                            if(!module.module){
                              name = module.files;
                            }else{
                              name = module.name;
                            }
                          }else{
                            name = src;
                          }
                        });
                        return $ocLazyLoad.load(name);
                      } );
                    });
                    deferred.resolve();
                    return callback ? promise.then(function(){ return callback(); }) : promise;
                }]
            }
          }
      }
    ]
  );

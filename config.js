/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
  function getBaseURL() {
       return location.protocol + "//" + location.hostname + 
          (location.port && ":" + location.port) ;
    } 
    // var baseUrl = appUrl+"/api/";
    var appUrl = getBaseURL();
   
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/index/main");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "content.html",
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "main.html",
            data: { pageTitle: 'Dashboard' }
        })
        .state('index.minor', {
            url: "/minor",
            templateUrl: "reports.html",
            data: { pageTitle: 'Dashboard' },
            resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                {
                serie: true,
                name: 'angular-flot',
                files: [ appUrl+'/assets/inspinia/js/plugins/flot/jquery.flot.js', appUrl+'/assets/inspinia/js/plugins/flot/jquery.flot.time.js', appUrl+'/assets/inspinia/js/plugins/flot/jquery.flot.tooltip.min.js', appUrl+'/assets/inspinia/js/plugins/flot/jquery.flot.spline.js', appUrl+'/assets/inspinia/js/plugins/flot/jquery.flot.resize.js', appUrl+'/assets/inspinia/js/plugins/flot/jquery.flot.pie.js', appUrl+'/assets/inspinia/js/plugins/flot/curvedLines.js', appUrl+'/assets/inspinia/js/plugins/flot/angular-flot.js']
                },
                {
                name: 'angles',
                files: [appUrl+'/assets/inspinia/js/plugins/chartJs/angles.js', appUrl+'/assets/inspinia/js/plugins/chartJs/Chart.min.js']
                },
                {
                name: 'angular-peity',
                files: [appUrl+'/assets/inspinia/js/plugins/peity/jquery.peity.min.js', appUrl+'/assets/inspinia/js/plugins/peity/angular-peity.js']
                }
                ]);
                }
                }
          
          })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
        $rootScope.appName = "nfi";
    });

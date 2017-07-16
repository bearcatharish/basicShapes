
'use strict';  //so as to ensure that  javscript strict syntax is followed or else error is thrown

var myApp = angular                            //register module with name myApp
  .module('myApp', [               //injecting dependencies for angular 
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {   //services for route config and enabling html5 mode to enusre that
    $routeProvider                                         // pretty URL # are removed
      .when('/', {
        templateUrl: 'views/home.html',                     //render-view onto index.html
        controller: 'MainCtrl',                             //business logic 
        controllerAs: 'main'
      })
      .otherwise({                       //invalid access to any url in browser link
        redirectTo: '/'
      });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  });

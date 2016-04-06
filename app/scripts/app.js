'use strict';

/**
 * @ngdoc overview
 * @name eBankingAdminApp
 * @description
 * # eBankingAdminApp
 *
 * Main module of the application.
 */
angular
  .module('eBankingAdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/vid-rabota', {
        templateUrl: 'views/vid-rabota.html',
        controller: 'VidRabotaCtrl'
      })
      .when('/vid-rabota/create', {
        templateUrl: 'views/vid-rabota-create.html',
        controller: 'VidRabotaCreateCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
      })
      .otherwise({
        redirectTo: '/main'
      });
  });

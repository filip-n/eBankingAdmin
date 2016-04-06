/**
 * Created by NikolovskiF on 06.04.2016.
 */


'use strict';

/**
 * @ngdoc function
 * @name eBankingAdminApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the eBankingAdminApp
 */
angular.module('eBankingAdminApp')
  .controller('IndexCtrl', function ($scope, $location, authService) {




    $scope.logOut = function () { console.log("logout");
      authService.logout();
      $location.path('/login');
    }

    //$scope.authentication = AuthService.authentication;



  });

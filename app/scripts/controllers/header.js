'use strict'

angular.module('eBankingAdminApp')
  .controller('HeaderCtrl', function($scope){

    $scope.loggedUser = {};

    // $scope.loggedUser = "filip NIkolovski"
    $rootScope.loggedUser.KindergardenName = "kinder garden name"
  });

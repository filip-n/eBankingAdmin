/**
 * Created by NikolovskiF on 21.03.2016.
 */

'use strict';

/**
 * @ngdoc function
 * @name eBankingAdminApp.controller:VidRabotaCtrl
 * @description
 * # VidRabotaCtrl
 * Controller of the eBankingAdminApp
 */

angular.module('eBankingAdminApp')
  .controller('VidRabotaCreateCtrl', function($scope, gatewayService){



    $scope.vidoviRabota = {

      'vidRabota' : 1101,
      'opis': 'Sms paket A',
      'status': 1,
      'datum': new Date()
    }


    $scope.productBody =  [
      {
        "ProductBodyID": 1,
        "ProductID": 3,
        "VidRabotaID": 3,
        "FieldID": 3,
        "FieldName": "Text",//
        "Mandatory": "1",//
        "FiledType": "Input",//
        "FieldLength": "15",//
        "ControlType": "nesto",
        "FillApi": "nesto",
        "DefaultValue": "Zdravo"
      },
      {
        "ProductBodyID": 2,
        "ProductID": 3,
        "VidRabotaID": 3,
        "FieldID": 3,
        "FieldName": "Text",
        "Mandatory": "1",
        "FiledType": "Input",
        "FieldLength": "15",
        "ControlType": "nesto",
        "FillApi": "nesto",
        "DefaultValue": "Zdravo"
      }
      ];

    $scope.addRow = function(){

      if ($scope.productBodyNew != undefined && $scope.productBodyNew.FieldName != undefined) {
        // console.log("zz", $scope.productBodyNew.FieldName != undefined);
        var result = $scope.productBody.filter(function (obj) {
          if (obj.FieldName == $scope.productBodyNew.FieldName) {
            return 1;
          } else {
            return 0;
          }
        });
      }

      if(result != undefined && result.length <= 0){
        $scope.productBody.push($scope.productBodyNew);
      }
      $scope.productBodyNew = {};
    }

    $scope.removeRow = function(index){

      $scope.productBody.splice(index, 1);
    }




  });

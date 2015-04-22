'use strict';

/* Controllers */

var calendarioControllers = angular.module('calendarioControllers', []);

calendarioControllers.controller('CultivoListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('cultivos/cultivos.json').success(function(data) {
      $scope.cultivos = data;
    });
      $http.get('meses/meses.json').success(function(data) {
      $scope.meses = data;
    });

    $scope.date = new Date();

    $scope.orderProp = 'age';
  }]);

calendarioControllers.controller('CultivoDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('cultivos/' + $routeParams.cultivoId + '.json').success(function(data) {
      $scope.cultivo = data;
      $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }; 


  }]);

calendarioControllers.controller('MesDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('meses/' + $routeParams.mesId + '.json').success(function(data) {
      $scope.mes = data;
      $scope.mainImageUrl = data.images[0];
    });
    
    $http.get('cultivos/cultivos.json').success(function(data) {
      $scope.cultivos = data;
    });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);


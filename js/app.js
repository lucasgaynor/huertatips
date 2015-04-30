'use strict';

/* App Module */

var calendarioApp = angular.module('calendarioApp', [
  'ngRoute',
  'calendarioControllers',
  'calendarioFilters', 

]);

calendarioApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      
      when('/calendario', {
        templateUrl: 'partials/meses-list.html',
        controller: 'CultivoListCtrl'
      }).

      when('/meses/:mesId', {
        templateUrl: 'partials/mes-detail.html',
        controller: 'MesDetailCtrl'
      }).

      when('/contacto', {
        templateUrl: 'partials/contacto.html',
      }).
      when('/cultivos', {
        templateUrl: 'partials/cultivo-list.html',
        controller: 'CultivoListCtrl', 
      }).

      when('/cultivos/:cultivoId', {
        templateUrl: 'partials/cultivo-detail.html',
        controller: 'CultivoDetailCtrl'
      }).
        
      when('/tareas', {
        templateUrl: 'partials/tareas-list.html',
        controller: 'TareasListCtrl', 
      }).

      when('/tareas/:tareaId', {
        templateUrl: 'partials/tarea-detail.html',
        controller: 'TareaDetailCtrl'
      }).

      when('/plagas/:plagaId', {
        templateUrl: 'partials/plaga-detail.html',
        controller: 'PlagaDetailCtrl'
      }).

      when('/', {
      templateUrl: 'partials/home.html',
      }).
           
      otherwise({
        redirectTo: '/home'
      });
  }]);




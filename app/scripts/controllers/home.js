'use strict';

/**
 * @ngdoc function
 * @name ExpenseManagerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ExpenseManagerApp
 */
angular.module('ExpenseManagerApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

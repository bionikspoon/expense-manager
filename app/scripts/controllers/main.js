'use strict';

/**
 * @ngdoc function
 * @name ExpenseManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ExpenseManagerApp
 */
angular.module('ExpenseManagerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

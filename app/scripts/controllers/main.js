'use strict';

/**
 * @ngdoc function
 * @name expenseManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseManagerApp
 */
angular.module('expenseManagerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name ExpenseManagerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ExpenseManagerApp
 */
angular.module('ExpenseManagerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

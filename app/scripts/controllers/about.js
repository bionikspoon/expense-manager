'use strict';

/**
 * @ngdoc function
 * @name expenseManagerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the expenseManagerApp
 */
angular.module('expenseManagerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

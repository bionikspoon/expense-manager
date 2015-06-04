'use strict';

/**
 * @ngdoc function
 * @name ExpenseManagerApp.controller:ViewSummaryCtrl
 * @description
 * # ViewSummaryCtrl
 * Controller of the ExpenseManagerApp
 */
angular.module('ExpenseManagerApp')

  .controller('ViewSummaryCtrl', function ($scope, ExpenseService) {
    $scope.expenses = ExpenseService.getExpense();
  });

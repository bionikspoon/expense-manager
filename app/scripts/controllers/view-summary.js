'use strict';

/**
 * @ngdoc function
 * @name ExpenseManagerApp.controller:ViewSummaryCtrl
 * @description
 * # ViewSummaryCtrl
 * Controller of the ExpenseManagerApp
 */
angular.module('ExpenseManagerApp')

  .controller('ViewSummaryCtrl',
  function ($scope, ExpenseService) {
    $scope.expenses = ExpenseService.expenses;

    ExpenseService.getExpenses();

    $scope.summaryData = ExpenseService.expensesByCategory;

    ExpenseService.getExpensesByCategory();



    $scope.toggleActive = function (index) {
      if ($scope.active === index) {
        $scope.active = null;
      } else {
        $scope.active = index;
      }

    };

    $scope.removeExpense = function (expense) {
      $scope.active = null;
      ExpenseService.removeExpense(expense);

    };
  });

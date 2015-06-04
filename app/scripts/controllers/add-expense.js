'use strict';

/**
 * @ngdoc function
 * @name ExpenseManagerApp.controller:AddExpenseCtrl
 * @description
 * # AddExpenseCtrl
 * Controller of the ExpenseManagerApp
 */
angular.module('ExpenseManagerApp')

  .controller('AddExpenseCtrl',
  function ($scope, CategoryList, ExpenseService) {
    $scope.categories = CategoryList;

    $scope.submit = function () {
      ExpenseService.saveExpense($scope.expense);
      $scope.expense = {};
      $scope.AddExpenseForm.$setPristine();
    };
  });

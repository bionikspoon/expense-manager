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
  function ($scope, ExpenseService, CategoryList) {
    $scope.expenses = ExpenseService.getExpense();

    $scope.summaryData = [];
    CategoryList.forEach(function (category) {
      var categoryTotal = ExpenseService.getCategoryTotal(category);
      $scope.summaryData.push({
        category: category,
        amount: categoryTotal
      });
    });
  });

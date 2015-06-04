'use strict';

/**
 * @ngdoc function
 * @name ExpenseManagerApp.controller:AddExpenseCtrl
 * @description
 * # AddExpenseCtrl
 * Controller of the ExpenseManagerApp
 */
angular.module('ExpenseManagerApp')

  .controller('AddExpenseCtrl', function ($scope, CategoryList) {
    $scope.categories = CategoryList;
  });

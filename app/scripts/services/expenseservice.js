'use strict';

/**
 * @ngdoc service
 * @name ExpenseManagerApp.ExpenseService
 * @description
 * # ExpenseService
 * Factory in the ExpenseManagerApp.
 */
angular.module('ExpenseManagerApp')

  .factory('ExpenseService', function ($q, CategoryList) {
    var prefix = 'expense-manager:';
    var expenseService = {};
    expenseService.expenses = [];
    expenseService.expensesByCategory = [];

    expenseService.saveExpense = function (data) {
      var timeStamp = Math.round(new Date().getTime());
      var key = prefix + timeStamp + Math.random();
      data.amount = Math.round(data.amount * 100) / 100;

      data = JSON.stringify(data);
      localStorage[key] = data;
      expenseService.getExpenses();
    };

    expenseService.getExpenses = function () {
      var expenses = [];
      Object.keys(localStorage).forEach(function (key) {
        if (key.substring(0, prefix.length) === prefix) {
          var item = localStorage[key];
          item = JSON.parse(item);
          item.key = key;
          expenses.push(item);
        }
      });

      return $q.when(expenses).then(function (data) {
        angular.copy(data, expenseService.expenses);
        expenseService.getExpensesByCategory();
      });
    };

    expenseService.getCategoryTotal = function (category) {
      var categoryTotal = 0;
      expenseService.expenses.forEach(function (expense) {

        if (expense.category === category) {
          categoryTotal += parseFloat(expense.amount);
        }

      });
      return categoryTotal;
    };

    expenseService.getExpensesByCategory = function () {
      var expensesByCategory = [];

      if (expenseService.expenses.length) {
        CategoryList.forEach(function (category) {
          var categoryTotal = expenseService.getCategoryTotal(category);
          expensesByCategory.push({
            category: category,
            amount: categoryTotal
          });
        });
      }

      return $q.when(expensesByCategory)

        .then(function (data) {
          angular.copy(data, expenseService.expensesByCategory);
        });
    };

    expenseService.removeExpense = function (expense) {
      localStorage.removeItem(expense.key);
      expenseService.getExpenses();
    };

    expenseService.reset = function () {
      var numberOfRecordsRemoved = 0;
      Object.keys(localStorage).forEach(function (key) {
        if (key.substring(0, prefix.length) === prefix) {
          localStorage.removeItem(key);
          numberOfRecordsRemoved++;
        }
      });
      expenseService.getExpenses();

      return numberOfRecordsRemoved;
    };

    return expenseService;
  });

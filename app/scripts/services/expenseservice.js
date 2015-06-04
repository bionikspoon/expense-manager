'use strict';

/**
 * @ngdoc service
 * @name ExpenseManagerApp.ExpenseService
 * @description
 * # ExpenseService
 * Factory in the ExpenseManagerApp.
 */
angular.module('ExpenseManagerApp')

  .factory('ExpenseService', function () {
    var prefix = 'expense-manager';
    var expenseService = {};

    expenseService.saveExpense = function (data) {
      var timeStamp = Math.round(new Date().getTime());
      var key = prefix + timeStamp;

      data = JSON.stringify(data);
      localStorage[key] = data;
    };

    return expenseService;
  });

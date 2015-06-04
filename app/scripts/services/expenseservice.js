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
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

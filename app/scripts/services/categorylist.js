'use strict';

/**
 * @ngdoc service
 * @name ExpenseManagerApp.CategoryList
 * @description
 * # CategoryList
 * Value in the ExpenseManagerApp.
 */
angular.module('ExpenseManagerApp')

  .value('CategoryList', [
    'Food',
    'Fuel',
    'Grocery',
    'Entertainment'
  ]);

'use strict';
var range = function (min, max) {
  return Math.random() * (max - min) + min;
};
var choice = function (array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
};

var gasStations = [
  'Shell',
  'Exxon',
  'Mobil',
  'BP',
  '7-11'
];
var restaurants = [
  'BurgerKing',
  'Portillos',
  'Cheesecake Factory',
  'Subway',
  '5 Guys',
  'Red Lobster'
];
var groceryStores = [
  'Whole Foods',
  'Trader Joes',
  'Redners',
  'Publix'
];
/**
 * @ngdoc service
 * @name ExpenseManagerApp.MockData
 * @description
 * # MockData
 * Constant in the ExpenseManagerApp.
 */
angular.module('ExpenseManagerApp')

  .constant('MockData', [
    {
      category: 'Food',
      amount: range(10, 300),
      description: choice(restaurants)
    },
    {
      category: 'Fuel',
      amount: range(5, 50),
      description: choice(gasStations)
    },
    {
      category: 'Grocery',
      amount: range(50, 200),
      description: choice(groceryStores)
    },
    {
      category: 'Entertainment',
      amount: range(10, 100),
      description: 'Drinks'
    },
    {
      category: 'Food',
      amount: range(10, 300),
      description: choice(restaurants)
    },
    {
      category: 'Fuel',
      amount: range(5, 50),
      description: choice(gasStations)
    },
    {
      category: 'Grocery',
      amount: range(50, 200),
      description: choice(groceryStores)
    },
    {
      category: 'Entertainment',
      amount: range(10, 100),
      description: 'More Drinks'
    },
    {
      category: 'Food',
      amount: range(10, 300),
      description: choice(restaurants)
    },
    {
      category: 'Fuel',
      amount: range(5, 50),
      description: choice(gasStations)
    },
    {
      category: 'Entertainment',
      amount: range(100, 500),
      description: 'Jamaica'
    },
    {
      category: 'Food',
      amount: range(10, 300),
      description: choice(restaurants)
    },
    {
      category: 'Fuel',
      amount: range(5, 50),
      description: choice(gasStations)
    },
    {
      category: 'Grocery',
      amount: range(50, 200),
      description: choice(groceryStores)
    },
    {
      category: 'Entertainment',
      amount: range(10, 100),
      description: 'Pub'
    },
    {
      category: 'Entertainment',
      amount: range(100, 500),
      description: 'PyCon 2015'
    },
    {
      category: 'Food',
      amount: range(10, 300),
      description: choice(restaurants)
    },
    {
      category: 'Fuel',
      amount: range(5, 50),
      description: choice(gasStations)
    },
    {
      category: 'Food',
      amount: range(10, 300),
      description: choice(restaurants)
    },
    {
      category: 'Fuel',
      amount: range(5, 50),
      description: choice(gasStations)
    },
    {
      category: 'Grocery',
      amount: range(50, 200),
      description: choice(groceryStores)
    },
    {
      category: 'Food',
      amount: range(10, 300),
      description: choice(restaurants)
    },
    {
      category: 'Fuel',
      amount: range(5, 50),
      description: choice(gasStations)
    },
    {
      category: 'Entertainment',
      amount: range(10, 100),
      description: 'Avengers 2'
    },
    {
      category: 'Entertainment',
      amount: range(100, 500),
      description: 'Max Rager Concert'
    }
  ]);

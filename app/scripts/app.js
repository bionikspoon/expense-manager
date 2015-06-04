'use strict';

/**
 * @ngdoc overview
 * @name ExpenseManagerApp
 * @description
 * # ExpenseManagerApp
 *
 * Main module of the application.
 */
angular
  .module('ExpenseManagerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/add-expense', {
        templateUrl: 'views/add-expense.html',
        controller: 'AddExpenseCtrl'
      })
      .when('/view-summary', {
        templateUrl: 'views/view-summary.html',
        controller: 'ViewSummaryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

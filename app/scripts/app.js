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

  .run(function ($log, $window, $rootScope, ExpenseService, MockData) {
    $log.info('Pro Tip: Type "migrate" to populate mock data and "reset" to reset');
    Object.defineProperty($window, 'migrate', {
      get: function () {
        $log.info('Populating your app with mock data.');

        MockData.forEach(function (data) {
          ExpenseService.saveExpense(data);
        });

        return MockData.length + ' records added.';
      }
    });
    Object.defineProperty($window, 'reset', {
      get: function () {
        var numberOfRecordsRemoved;
        $log.info('Resetting data.');

        numberOfRecordsRemoved = ExpenseService.reset();
        $rootScope.$digest();
        return numberOfRecordsRemoved + ' records removed.';
      }
    });

  })

  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
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

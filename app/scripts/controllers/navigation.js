'use strict';

/**
 * @ngdoc function
 * @name ExpenseManagerApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the ExpenseManagerApp
 */
angular.module('ExpenseManagerApp').controller('NavigationCtrl',
  function ($scope, $location, $q, $timeout) {
    $scope.slidingDirection = 'slide-right';

    var navigator = function (incrementer) {

      var pages = [
        '/',
        '/add-expense',
        '/view-summary'
      ];

      var currentPage = $location.path();
      var lastPageIndex = pages.length - 1;
      var pageIndex = pages.indexOf(currentPage);
      var direction = pageIndex + incrementer;

      if (direction === -1) {direction = lastPageIndex;}
      if (direction > lastPageIndex) {direction = 0;}

      var nextUrl = pages[direction] || '';

      $location.url(nextUrl);
    };

    $scope.goLeft = function () {
      $q.when($scope.slidingDirection = 'slide-left')

        .then($timeout(function () {
          navigator(-1);
        }));

    };
    $scope.goRight = function () {
      $q.when($scope.slidingDirection = 'slide-right')

        .then($timeout(function () {
          navigator(1);
        }));

    };
  });

'use strict';

/**
 * @ngdoc function
 * @name ExpenseManagerApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the ExpenseManagerApp
 */
angular.module('ExpenseManagerApp').controller('NavigationCtrl',
  function ($scope, $location) {
    var navigator = function (incrementer) {
      var nextUrl;
      var pages = [
        '/',
        '/add-expense',
        '/view-summary'
      ];
      nextUrl = '';
      var currentPage = $location.path();
      var lastPageIndex = pages.length - 1;
      var pageIndex = pages.indexOf(currentPage);
      var direction = pageIndex + incrementer;

      if (direction === -1) direction = lastPageIndex;
      if (direction > lastPageIndex) direction = 0;

      nextUrl = pages[direction];

      $location.url(nextUrl);
    };

    $scope.goLeft = function () {
      navigator(-1);
    };
    $scope.goRight = function () {
      navigator(1);
    };
  });

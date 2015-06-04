'use strict';

/**
 * @ngdoc directive
 * @name ExpenseManagerApp.directive:barChart
 * @description
 * # barChart
 */
angular.module('ExpenseManagerApp')

  .directive('barChart', function () {
    return {
      scope: {
        data: '='
      },
      template: '<div id="chart"></div>',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });

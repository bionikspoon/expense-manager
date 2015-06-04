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
        var chart = d3.select('#chart')

          .append('svg')

          .style('width', '95%');

        scope.drawGraph = function (data) {
          var barHeight = 20;
          var barGap = 5;
          var graphOrigin = 100;
          var chartWidth = chart.style('width');
          var chartHeight = scope.data.length * (barHeight + barGap);
          var color = d3.scale.category10();
          var xScale = d3.scale.linear()

            .domain([
              0,
              d3.max(data, function (d) {
                return d.amount;
              })
            ])

            .range([
              0,
              chartWidth
            ]);

          chart.attr('height', chartHeight);
          chart.selectAll('categoryBars')

            .data(data)

            .enter()

            .append('rect')

            .attr('height', barHeight)

            .attr('x', graphOrigin)

            .attr('y', function (d, i) {
              return i * (barHeight + barGap);
            })

            .attr('fill', function (d) {
              return color(d.amount);
            })

            .attr('width', function (d) {
              return xScale(d.amount);
            });

          chart.selectAll('categoryLabel')

            .data(data)

            .enter()

            .append('text')

            .attr('fill', '#fff')

            .attr('y', function (d, i) {
              return i * (barHeight + barGap) + 15;
            })

            .attr('x', (graphOrigin - 5))

            .attr('text-anchor', 'end')

            .text(function (d) {
              return d.category;
            });

          chart.selectAll('values')

            .data(data)

            .enter()

            .append('text')

            .attr('fill', '#fff')

            .attr('y', function (d, i) {
              return i * (barHeight + barGap) + 15;
            })

            .attr('x', (graphOrigin + 5))

            .attr('text-anchor', 'start')


            .text(function (d) {
              return d.amount;
            });

        };
        scope.drawGraph(scope.data);
      }
    };
  });

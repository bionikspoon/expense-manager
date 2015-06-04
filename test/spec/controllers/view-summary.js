'use strict';

describe('Controller: ViewSummaryCtrl', function () {

  // load the controller's module
  beforeEach(module('ExpenseManagerApp'));

  var ViewSummaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewSummaryCtrl = $controller('ViewSummaryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

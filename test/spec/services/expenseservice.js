'use strict';

describe('Service: ExpenseService', function () {

  // load the service's module
  beforeEach(module('ExpenseManagerApp'));

  // instantiate service
  var ExpenseService;
  beforeEach(inject(function (_ExpenseService_) {
    ExpenseService = _ExpenseService_;
  }));

  it('should do something', function () {
    expect(!!ExpenseService).toBe(true);
  });

});

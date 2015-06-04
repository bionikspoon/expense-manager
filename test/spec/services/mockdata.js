'use strict';

describe('Service: MockData', function () {

  // load the service's module
  beforeEach(module('ExpenseManagerApp'));

  // instantiate service
  var MockData;
  beforeEach(inject(function (_MockData_) {
    MockData = _MockData_;
  }));

  it('should do something', function () {
    expect(!!MockData).toBe(true);
  });

});

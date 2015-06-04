'use strict';

describe('Service: CategoryList', function () {

  // load the service's module
  beforeEach(module('ExpenseManagerApp'));

  // instantiate service
  var CategoryList;
  beforeEach(inject(function (_CategoryList_) {
    CategoryList = _CategoryList_;
  }));

  it('should do something', function () {
    expect(!!CategoryList).toBe(true);
  });

});
